import React from "react";
import { getFormattedDateWithZeroPreffix } from "helpers/form";
import { imageLoader } from "helpers/image";
import { NumericFormat } from "react-number-format";
import { BOOKING_STEPS, BOOKING_TYPE, AIRPORT_TYPE } from "constants/booking";

import {
  Container,
  Footer,
  Body,
  Price,
  Detail,
  Title,
  Capacity,
  TotalPrice,
  VehicleItemContainer,
  WaitingTimeDisclaimer,
  SimilarIndicator,
  NoteTextArea,
  VehicleImage,
  DetailRow,
  Label,
  Value,
  TotalPriceLabel,
  TotalPriceContainer,
} from "./style";
import GratuitySelect from "../paymentForm/GratuitySelect";

type Props = {
  bookingType: number;
  note: string;
  setNote: (newValue: string) => void;
  reservationDetail?: any;
  getTotalPrice: () => string;
  isFormSubmitedSuccessfully: boolean;
  isMeetAndGreetIncluded: boolean;
  renderControllButtons: (index: number) => JSX.Element;
  setTip: (obj: object) => void;
};

const ReservationDetail = ({
  reservationDetail,
  isFormSubmitedSuccessfully,
  isMeetAndGreetIncluded,
  note,
  setNote,
  getTotalPrice,
  renderControllButtons,
  bookingType,
  setTip,
}: Props) => {
  if (!reservationDetail) {
    return null;
  }

  function isAirportIncluded() {
    return bookingType === BOOKING_TYPE.AIRPORT;
  }

  function isExtendedWaitTimeApplied() {
    const [pickupLocation] = reservationDetail.pickup.locations;
    if (pickupLocation?.placeType === AIRPORT_TYPE) {
      return true;
    }

    return false;
  }

  function handleNoteChange(e) {
    if (isFormSubmitedSuccessfully === false) {
      setNote(e.target.value);
    }
  }

  function renderLocationList(locationList) {
    function generateLabel(index: number) {
      if (index === 0) {
        return "From";
      }

      return locationList.length === 2 ? "To" : `To ${index}`;
    }

    return locationList.map(({ address, placeId }, index) => (
      <DetailRow key={`${placeId}-${index}`}>
        <Label>{generateLabel(index)}</Label>
        <Value>{address}</Value>
      </DetailRow>
    ));
  }

  function renderPickupDetails() {
    return (
      <>
        <DetailRow>
          <Label>Pick up date</Label>
          <Value>
            {getFormattedDateWithZeroPreffix(reservationDetail.pickup.date)}
          </Value>
        </DetailRow>
        <DetailRow>
          <Label>Pick up time</Label>
          <Value>
            {reservationDetail.pickup.time} {reservationDetail.pickup.meridiem}
          </Value>
        </DetailRow>
        {renderLocationList(reservationDetail.pickup.locations)}
      </>
    );
  }

  function renderReturnPickupDetails() {
    if (!reservationDetail.isRoundTrip) {
      return null;
    }

    return (
      <>
        <DetailRow>
          <Label>Return date</Label>
          <Value>
            {getFormattedDateWithZeroPreffix(
              reservationDetail.returnPickup.date
            )}
          </Value>
        </DetailRow>
        <DetailRow>
          <Label>Return time</Label>
          <Value>
            {reservationDetail.returnPickup.time}{" "}
            {reservationDetail.returnPickup.meridiem}
          </Value>
        </DetailRow>
        {renderLocationList(reservationDetail.returnPickup.locations)}
      </>
    );
  }

  function renderTipsField() {
    return (
      <DetailRow>
        <Label>Gratuity</Label>
        <GratuitySelect total={getTotalPrice()} setTip={setTip} />
      </DetailRow>
    );
  }

  return (
    <Container>
      <VehicleItemContainer>
        <VehicleImage
          loader={imageLoader}
          src={reservationDetail.image}
          alt="Vehicle image"
        />
        <Detail>
          <Title>{reservationDetail.type}</Title>
          <Capacity>{`Capacity: ${reservationDetail.capacity}`}</Capacity>
          <SimilarIndicator>or similar</SimilarIndicator>
        </Detail>
        <NumericFormat
          value={reservationDetail.price.toFixed(2)}
          thousandSeparator=","
          displayType="text"
          renderText={(value) => <Price>EST ${value}</Price>}
        />
      </VehicleItemContainer>
      <Body>
        {renderPickupDetails()}
        {renderReturnPickupDetails()}
        {isAirportIncluded() && !!reservationDetail.airline && (
          <DetailRow>
            <Label>Airline</Label>
            <Value>{reservationDetail.airline.name}</Value>
          </DetailRow>
        )}
        {isAirportIncluded() && !!reservationDetail.flightNumber && (
          <DetailRow>
            <Label>Flight Number</Label>
            <Value>{reservationDetail.flightNumber}</Value>
          </DetailRow>
        )}
        {reservationDetail.isHourly && (
          <DetailRow>
            <Label>Hourly</Label>
            <Value>{reservationDetail.hoursCount}</Value>
          </DetailRow>
        )}
        {/* {renderTipsField()} */}
        <DetailRow>
          <Label>Transaction fee</Label>
          <NumericFormat
            value={reservationDetail.transactionFee?.toFixed(2)}
            thousandSeparator=","
            displayType="text"
            renderText={(value) => <Value>${value}</Value>}
          />
        </DetailRow>
      </Body>
      <NoteTextArea
        rows={1}
        placeholder="Notes / special requests / safely seat"
        onChange={handleNoteChange}
        value={note}
      />
      <Footer>
        <TotalPriceContainer>
          <TotalPriceLabel>Total</TotalPriceLabel>
          <NumericFormat
            value={getTotalPrice()}
            thousandSeparator=","
            displayType="text"
            renderText={(value) => <TotalPrice>${value}</TotalPrice>}
          />
        </TotalPriceContainer>
        <WaitingTimeDisclaimer>{`Chauffeur will wait ${
          isExtendedWaitTimeApplied() ? "60" : "15"
        } minutes free of charge`}</WaitingTimeDisclaimer>
      </Footer>
      {renderControllButtons(BOOKING_STEPS.RESERVATION_DETAIL)}
      hello
    </Container>
  );
};

export default ReservationDetail;
