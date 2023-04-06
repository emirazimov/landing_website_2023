import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useForm, FormProvider } from "react-hook-form";
import styled from "styled-components";
import Button from "components/common/Button";
import { getFleetlistWithPrices } from "api/fleet";
import { makeReservation } from "api/reservation";
import { prepareLocationsRequestData } from "helpers/booking";
import { vehicleTypes, vehicles } from "constants/vehicleTypes";
import {
  AIRPORT_TYPE,
  BOOKING_TYPE,
  BOOKING_STEPS,
  emptyStartEndLocations,
  bookingFormDefaultValues,
  paymentFormDefaultValues,
} from "constants/booking";
import { Toaster } from "react-hot-toast";
import { displayToast } from "helpers/toast";
import { IVehicleType } from "../../../vehicles";
import Carousel from "nuka-carousel";
import {
  getFormattedSubmitDate,
  getFormattedSubmitLocations,
} from "helpers/form";
import useDebounce from "components/hooks/useDebounce";
import useWindowSize from "components/hooks/useWindowSize";
import {
  mediaDevice,
  isSmallScreenOrTablet,
  isMobile,
} from "helpers/responsiveUITools";
import BookingForm from "./bookingForm";
import WebVehicleTypeSelect from "./vehicleTypeSelect";
import MobileVehicleTypeSelect from "./vehicleSelectMobile";

declare global {
  interface Window {
    report_land_payment_form: (arg: number | string) => void;
    report_fill_locations: () => void;
    report_make_reservation: (arg: number | string) => void;
    mtagq: any[];
  }
}

const PaymentForm = dynamic(() => import("./paymentForm"), {
  ssr: false,
});

const ReservationDetailWeb = dynamic(() => import("./reservationDetail"), {
  ssr: false,
});

const ReservationDetailMobile = dynamic(
  () => import("./reservationDetailMobile"),
  {
    ssr: false,
  }
);

import ProgressIndicator from "./ProgressIndicator";

import { Row, Placeholder } from "./styles";
import Spinner from "../SimpleSpinner";
import { imageLoader } from "helpers/image";

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const FormFooterButton = styled(Button)`
  width: 160px;

  ${mediaDevice["mobile"]`
        width: 100%;
    `}
`;

const MobileControlButtonsContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  height: 540px;
  margin-top: 20px;
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  align-items: flex-start;
  display: flex;
  overflow-y: inherit;

  ${mediaDevice["smallScreen"]`
       height: auto;
       margin-top: 0px;
    `}
`;

const ControlButtons = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-y: visible;

  ${mediaDevice["smallScreen"]`
        display: none;
    `}
`;

const CenteredRow = styled(Row)`
  justify-content: center;
  align-items: center;
`;

const Booking = () => {
  const [selectedVehicleType, setSelectedVehicleType] = useState(
    vehicleTypes.SEDAN
  );
  const [vehicleList, setVehicleList] = useState<IVehicleType[]>(vehicles);
  const [step, setStep] = useState<number>(BOOKING_STEPS.BOOKING_FORM);
  const [note, setNote] = useState("");
  const [tips, setTip] = useState({
    amountType: 1,
    amount: 0,
  });
  const [isReservationInProgress, setIsReservationInProgress] = useState(false);
  const [isBookingSuccssed, setIsBookingSuccssed] = useState(false);
  const windowSize = useWindowSize();
  const carouselRef = useRef(false);

  const bookingFormMethods = useForm({
    defaultValues: bookingFormDefaultValues,
  });

  const paymentFormMethods = useForm({
    defaultValues: paymentFormDefaultValues,
  });

  const bookingFormvalues: any = bookingFormMethods.watch();
  const paymentFormValues = paymentFormMethods.watch();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (step === BOOKING_STEPS.PAYMENT_FORM) {
      if (window?.report_land_payment_form) {
        window?.report_land_payment_form(getTotalPrice());
      }
    }
  }, [step]);

  const deboucedHourCount = useDebounce(bookingFormvalues.hoursCount, 300);
  const deboucedMeetandGreet = useDebounce(bookingFormvalues.meetAndGreet, 300);

  useEffect(() => {
    bookingFormMethods.setValue("returnPickup.locations", [
      bookingFormvalues.pickup.locations[
        bookingFormvalues.pickup.locations.length - 1
      ],
      bookingFormvalues.pickup.locations[0],
    ]);
  }, [
    bookingFormvalues.pickup.locations.map((item) => item.placeId).join(""),
    bookingFormvalues.pickup.locations.length,
  ]);

  useEffect(() => {
    if (
      bookingFormvalues.pickup.locations.filter(
        (location) => !!location?.placeId
      ).length > 1
    ) {
      fetchFleetListWithPrices();
    } else {
      setVehicleList(vehicles);
    }
  }, [
    bookingFormvalues.pickup.locations.map((item) => item.placeId).join(""),
    bookingFormvalues.returnPickup.locations
      .map((item) => item.placeId)
      .join(""),
    bookingFormvalues.isHourly,
    deboucedHourCount,
    deboucedMeetandGreet,
    bookingFormvalues.isRoundTrip,
  ]);

  async function fetchFleetListWithPrices() {
    const [listOfVehicleResponse, error]: [IVehicleType[], Error] =
      await getFleetlistWithPrices({
        captcha: "",
        hours: bookingFormvalues.isHourly ? parseInt(deboucedHourCount, 10) : 0,
        isGateMeeting: includesAirport() ? deboucedMeetandGreet : false,
        orderAddressDetails: prepareLocationsRequestData(
          bookingFormvalues.pickup.locations
        ),
        returnOrderAddressDetails: bookingFormvalues.isRoundTrip
          ? prepareLocationsRequestData(
              bookingFormvalues.returnPickup.locations
            )
          : [],
        isRoundTrip: bookingFormvalues.isRoundTrip,
        page: 1,
        typeId: 1,
        bookingType: getBookingType(),
        passengersQuantity: getPassangerQuntity(),
        isAirportPickupIncluded: includesAirport(),
      });

    if (error) {
      bookingFormMethods.setValue("pickup.locations", emptyStartEndLocations);
      return displayToast({
        message: error.message,
        type: "error",
        duration: 7000,
        id: "fleetPrice",
      });
    }

    let vehicleListToUpdate = vehicles;

    Object.values(vehicleTypes).forEach((type) => {
      const updatedVehicleDetail: any = listOfVehicleResponse.find(
        (item) => item.type === type
      );
      const indexOfVehicleToUpdate = vehicleListToUpdate.findIndex(
        (item) => item.type === type
      );

      if (!updatedVehicleDetail || indexOfVehicleToUpdate === -1) {
        return null;
      }

      const vehicleToUpdate = vehicleListToUpdate[indexOfVehicleToUpdate];

      vehicleListToUpdate = [
        ...vehicleListToUpdate.slice(0, indexOfVehicleToUpdate),
        {
          ...vehicleToUpdate,
          capacity: updatedVehicleDetail.capacity,
          price: updatedVehicleDetail.price,
          ...updatedVehicleDetail,
        },
        ...vehicleListToUpdate.slice(indexOfVehicleToUpdate + 1),
      ];
    });

    if (window?.report_fill_locations) {
      window?.report_fill_locations();
    }

    setVehicleList(vehicleListToUpdate);
  }

  function getReservationPrice() {
    const reservationVehicle = getReservationDetail();
    if (!reservationVehicle) {
      return "0";
    }

    return reservationVehicle.price;
  }

  function getTotalPrice() {
    const reservationVehicle = getReservationDetail();
    if (!reservationVehicle) {
      return "0";
    }

    let totalPrice = reservationVehicle.price;

    if (reservationVehicle.transactionFee) {
      totalPrice += reservationVehicle.transactionFee;
    }

    return totalPrice.toFixed(2);
  }

  function includesAirport(): boolean {
    return bookingFormvalues.pickup.locations
      .map(({ placeType }) => placeType)
      .includes(AIRPORT_TYPE);
  }

  function getPassangerQuntity() {
    if (isNaN(parseInt(bookingFormvalues.passengerCount))) {
      return 1;
    }

    return parseInt(bookingFormvalues.passengerCount);
  }

  function getSelectedVehicleId() {
    const selectedVehicle: any = vehicleList.find(
      ({ type }) => selectedVehicleType === type
    );

    return selectedVehicle.id;
  }

  function getCurrentIndicatorStep() {
    if (isBookingSuccssed) {
      return step + 2;
    }

    if (
      isMobile(windowSize.width) === false &&
      bookingFormvalues.pickup.locations.filter(({ placeId }) => !!placeId)
        .length > 1
    ) {
      return step + 1;
    }

    return step;
  }

  function getBookingType(): number {
    if (includesAirport()) {
      return BOOKING_TYPE.AIRPORT;
    } else if (bookingFormvalues.isHourly) {
      return BOOKING_TYPE.HOURLY;
    }

    return BOOKING_TYPE.BY_DISTANCE;
  }

  function getReservationDetail() {
    const selectedVehicle = vehicleList.find(
      ({ type }) => selectedVehicleType === type
    );

    if (selectedVehicle) {
      return {
        ...bookingFormvalues,
        ...selectedVehicle,
      };
    }

    return selectedVehicle;
  }

  async function handleGotoPaymentStep() {
    if (isSmallScreenOrTablet(windowSize.width)) {
      return setStep(BOOKING_STEPS.SELECT_VEHICLE);
    }

    if (!selectedVehicleType) {
      return displayToast({
        message: "Please select vehicle type first",
        type: "error",
        id: "selectWehicle",
      });
    }

    const selectedVehicle = vehicleList.find(
      ({ type }) => selectedVehicleType === type
    );

    if (!selectedVehicle?.price) {
      return;
    }

    return setStep(BOOKING_STEPS.PAYMENT_FORM);
  }

  function handleGobackToBooking() {
    if (isReservationInProgress) {
      return null;
    }

    setStep(BOOKING_STEPS.BOOKING_FORM);
  }

  function handleGotoReservationDetail() {
    if (!selectedVehicleType) {
      return displayToast({
        message: "Please select vehicle type first",
        type: "error",
        id: "selectWehicle",
      });
    }

    return setStep(BOOKING_STEPS.RESERVATION_DETAIL);
  }

  function GAReservationTrigger({ reservationId }) {
    // Microsoft UET
    if (window?.report_make_reservation) {
      window?.report_make_reservation(getTotalPrice());
    }

    window?.dataLayer.push({ event: "form_send_ok" });
    window?.dataLayer.push({
      ecommerce: {
        currencyCode: "USD",
        purchase: {
          actionField: {
            id: `${reservationId}`, // айди транзакции
            affiliation: "bookinglane.com",
            revenue: `${getTotalPrice()}`, //общая стоимость брони
            coupon: "Coupon 1", //название промокода если есть
          },
        },
      },
      event: "gtm-ee-event",
      "gtm-ee-event-category": "Enhanced Ecommerce",
      "gtm-ee-event-action": "Purchase",
      "gtm-ee-event-non-interaction": "False",
    });

    // window?.mtagq?.push("event", "", {
    //     revenue_value: getTotalPrice(),
    //     currency: "USD",
    // });
  }

  async function handleBookVehicle() {
    if (isReservationInProgress) {
      return null;
    }

    const [month, year] = paymentFormValues.card.expirationDate.split("/");

    setIsReservationInProgress(true);
    const [err, result]: any = await makeReservation({
      orderAddressDetails: getFormattedSubmitLocations(
        bookingFormvalues.pickup.locations as any
      ),
      returnOrderAddressDetails: bookingFormvalues.isRoundTrip
        ? getFormattedSubmitLocations(
            bookingFormvalues.returnPickup.locations as any
          )
        : [],
      bookingType: getBookingType(),
      passengersQuantity: getPassangerQuntity(),
      isRoundTrip: bookingFormvalues.isRoundTrip,
      orderStartDateTime: getFormattedSubmitDate({
        date: bookingFormvalues.pickup.date as any,
        time: bookingFormvalues.pickup.time,
        meridiem: bookingFormvalues.pickup.meridiem,
      }),
      returnStartDateTime: bookingFormvalues.isRoundTrip
        ? getFormattedSubmitDate({
            date: bookingFormvalues.returnPickup.date as any,
            time: bookingFormvalues.returnPickup.time,
            meridiem: bookingFormvalues.returnPickup.meridiem,
          })
        : "",
      carInfo: {
        id: getSelectedVehicleId(),
      },
      hourly: bookingFormvalues.isHourly,
      hours: bookingFormvalues.isHourly
        ? parseInt(bookingFormvalues.hoursCount, 10)
        : 0,
      paymentInfo: {
        cardNumber: paymentFormValues.card.number
          .split("")
          .filter((char) => isNaN(parseInt(char, 10)) === false)
          .join(""),
        month,
        year,
        cvc: paymentFormValues.card.cvv,
        amount: 0,
      },
      // tips: tips,
      client: {
        firstName: paymentFormValues.passenger.firstname,
        lastName: paymentFormValues.passenger.lastname,
        email: paymentFormValues.passenger.email,
        phoneNumber: paymentFormValues.passenger.phoneNumber,
      },
      isAirportPickupIncluded:
        getBookingType() === BOOKING_TYPE.AIRPORT
          ? bookingFormvalues.meetAndGreet
          : false,
      flightNumber:
        getBookingType() === BOOKING_TYPE.AIRPORT
          ? bookingFormvalues.flightNumber
          : 0,
      airlines: {
        id:
          getBookingType() === BOOKING_TYPE.AIRPORT
            ? bookingFormvalues.airline?.id ?? 0
            : 0,
      },
      luggageCount: parseInt(bookingFormvalues.luggageCount, 10),
      orderNotes: note,
      orderSum: getReservationPrice(),
      orderType: getBookingType(),
      page: 1, // default
      typeId: 0, // default
      captcha: "", // default
    });

    if (!err) {
      console.log(result);
      if (result?.reservationId) {
        GAReservationTrigger({ reservationId: result?.reservationId });
      }
      setIsBookingSuccssed(true);
    } else {
      displayToast({
        message: err.message,
        type: "error",
        duration: 7000,
        id: "makeReservation",
      });
    }

    setIsReservationInProgress(false);
  }

  function renderMobileControlButtons(index: number) {
    if (!isSmallScreenOrTablet(windowSize.width)) {
      return null;
    }

    if (index === BOOKING_STEPS.BOOKING_FORM) {
      return (
        <MobileControlButtonsContainer>
          <FormFooterButton
            onClick={bookingFormMethods.handleSubmit(handleGotoPaymentStep)}
          >
            Continue
          </FormFooterButton>
        </MobileControlButtonsContainer>
      );
    }

    if (index === BOOKING_STEPS.SELECT_VEHICLE) {
      return (
        <MobileControlButtonsContainer>
          <FormFooterButton onClick={handleGobackToBooking}>
            Back
          </FormFooterButton>
          <Placeholder width={20} />
          <FormFooterButton onClick={handleGotoReservationDetail}>
            <CenteredRow>Continue</CenteredRow>
          </FormFooterButton>
        </MobileControlButtonsContainer>
      );
    }

    if (index === BOOKING_STEPS.RESERVATION_DETAIL) {
      return (
        <MobileControlButtonsContainer>
          <FormFooterButton
            onClick={() => setStep(BOOKING_STEPS.SELECT_VEHICLE)}
          >
            Back
          </FormFooterButton>
          <Placeholder width={20} />
          <FormFooterButton onClick={() => setStep(BOOKING_STEPS.PAYMENT_FORM)}>
            <CenteredRow>Continue</CenteredRow>
          </FormFooterButton>
        </MobileControlButtonsContainer>
      );
    }

    if (index === BOOKING_STEPS.PAYMENT_FORM) {
      if (isBookingSuccssed) {
        return null;
      }

      const handleGoBack = () => {
        if (isReservationInProgress) {
          return null;
        }

        return setStep(BOOKING_STEPS.RESERVATION_DETAIL);
      };

      return (
        <MobileControlButtonsContainer>
          <FormFooterButton onClick={handleGoBack}>Back</FormFooterButton>
          <Placeholder width={20} />
          <FormFooterButton
            onClick={paymentFormMethods.handleSubmit(handleBookVehicle)}
          >
            <CenteredRow>
              {isReservationInProgress && <Spinner />}Book
            </CenteredRow>
          </FormFooterButton>
        </MobileControlButtonsContainer>
      );
    }
  }

  function renderWebContorlButtons() {
    if (step === BOOKING_STEPS.BOOKING_FORM) {
      return (
        <FormFooterButton
          onClick={bookingFormMethods.handleSubmit(handleGotoPaymentStep)}
        >
          Continue
        </FormFooterButton>
      );
    }

    if (step === BOOKING_STEPS.PAYMENT_FORM) {
      return (
        <Row>
          {isBookingSuccssed ? null : (
            <>
              <FormFooterButton onClick={handleGobackToBooking}>
                Back
              </FormFooterButton>
              <Placeholder width={20} />
              <FormFooterButton
                onClick={paymentFormMethods.handleSubmit(handleBookVehicle)}
              >
                <CenteredRow>
                  {isReservationInProgress && <Spinner />}Book
                </CenteredRow>
              </FormFooterButton>
            </>
          )}
        </Row>
      );
    }

    return null;
  }

  return (
    <Container>
      <div>
        <Toaster />
      </div>
      <ProgressIndicator
        isMobileView={isMobile(windowSize.width)}
        currentStep={getCurrentIndicatorStep()}
      />
      <Carousel
        wrapAround={true}
        slidesToShow={1}
        afterSlide={(index) => (carouselRef.current = true)}
        slideIndex={step}
        animation="zoom"
        disableEdgeSwiping
        dragging={false}
        speed={550}
        swiping={false}
        withoutControls={true}
        zoomScale={0.7}
      >
        <FormProvider {...bookingFormMethods}>
          <Content>
            <BookingForm
              renderControllButtons={renderMobileControlButtons as any}
            />
            <WebVehicleTypeSelect
              vehicleList={vehicleList}
              selectedVehicleType={selectedVehicleType}
              setSelectedVehicleType={setSelectedVehicleType}
            />
          </Content>
        </FormProvider>
        <MobileVehicleTypeSelect
          vehicleList={vehicleList}
          selectedVehicleType={selectedVehicleType}
          setSelectedVehicleType={setSelectedVehicleType}
          renderControllButtons={renderMobileControlButtons as any}
        />
        <ReservationDetailMobile
          bookingType={getBookingType()}
          isMeetAndGreetIncluded={bookingFormvalues.meetAndGreet}
          reservationDetail={getReservationDetail()}
          note={note}
          setNote={setNote}
          getTotalPrice={getTotalPrice}
          isFormSubmitedSuccessfully={isBookingSuccssed}
          renderControllButtons={renderMobileControlButtons as any}
          setTip={setTip as any}
        />
        {step === BOOKING_STEPS.PAYMENT_FORM && (
          <FormProvider {...paymentFormMethods}>
            <Content>
              <PaymentForm
                isBookingSuccssed={isBookingSuccssed}
                renderControllButtons={renderMobileControlButtons as any}
                setTip={setTip as any}
              />
              <ReservationDetailWeb
                bookingType={getBookingType()}
                isMeetAndGreetIncluded={bookingFormvalues.meetAndGreet}
                reservationDetail={getReservationDetail()}
                note={note}
                setNote={setNote}
                getTotalPrice={getTotalPrice()}
                total={getTotalPrice()}
                isFormSubmitedSuccessfully={isBookingSuccssed}
                setTip={setTip as any}
              />
            </Content>
          </FormProvider>
        )}
      </Carousel>
      <ControlButtons>{renderWebContorlButtons()}</ControlButtons>
    </Container>
  );
};

export default Booking;
