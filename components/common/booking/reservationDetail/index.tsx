import React from 'react';
import { getFormattedDateWithZeroPreffix } from 'helpers/form';
import { imageLoader } from 'helpers/image';
import { NumericFormat } from 'react-number-format';
import { BOOKING_TYPE, AIRPORT_TYPE } from 'constants/booking';
import {
	Container, Header, Footer, Body, ReservationHeaderDetail, VehicleType, Capacity, Price, CenteredRow, WaitingTimeDisclaimer,
	SimilarIndicator, NoteTextArea, VehicleImage, DetailRow, Label, Value, TotalPriceLabel, TotalPrice, TotalPriceContainer,
} from './style';
import GratuitySelect from '../paymentForm/GratuitySelect';

type Props = {
	bookingType: number,
	note: string,
	setNote: (newValue: string) => void,
	reservationDetail?: any,
	getTotalPrice: number,
	isFormSubmitedSuccessfully: boolean,
	isMeetAndGreetIncluded: boolean,
	setTip: (obj: object) => void,
	total: number;
}

const ReservationDetail = ({ reservationDetail, isFormSubmitedSuccessfully, isMeetAndGreetIncluded, note, setNote, getTotalPrice, bookingType, setTip, total }: Props) => {
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
				return 'From';
			}

			return locationList.length === 2 ? 'To' : `To ${index}`;
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
					<Value>{getFormattedDateWithZeroPreffix(reservationDetail.pickup.date)}</Value>
				</DetailRow>
				<DetailRow>
					<Label>Pick up time</Label>
					<Value>{reservationDetail.pickup.time} {reservationDetail.pickup.meridiem}</Value>
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
					<Value>{getFormattedDateWithZeroPreffix(reservationDetail.returnPickup.date)}</Value>
				</DetailRow>
				<DetailRow>
					<Label>Return time</Label>
					<Value>{reservationDetail.returnPickup.time} {reservationDetail.returnPickup.meridiem}</Value>
				</DetailRow>
				{renderLocationList(reservationDetail.returnPickup.locations)}
			</>
		);
	}

	return (
		<Container>
			<Header>
				<ReservationHeaderDetail>
					<CenteredRow>
						<VehicleType>{reservationDetail.type}</VehicleType>
						<Capacity>Capacity: {reservationDetail.capacity}</Capacity>
					</CenteredRow>
					<SimilarIndicator>or similar</SimilarIndicator>
					<NumericFormat
						value={reservationDetail.price.toFixed(2)}
						thousandSeparator=","
						displayType="text"
						renderText={(value) => <Price>${value}</Price>}
					/>
				</ReservationHeaderDetail>
				<VehicleImage
					loader={imageLoader}
					src={reservationDetail.image}
					alt="Vehicle image"
				/>
			</Header>
			<Body>
				{renderPickupDetails()}
				{renderReturnPickupDetails()}
				{
					isAirportIncluded() && !!reservationDetail.airline && (
						<DetailRow>
							<Label>Airline</Label>
							<Value>{reservationDetail.airline.name}</Value>
						</DetailRow>
					)
				}
				{
					isAirportIncluded() && !!reservationDetail.flightNumber && (
						<DetailRow>
							<Label>Flight Number</Label>
							<Value>{reservationDetail.flightNumber}</Value>
						</DetailRow>
					)
				}
				<DetailRow>
					<Label>Passenger(s)</Label>
					<Value>{reservationDetail.passengerCount}</Value>
				</DetailRow>
				{
					reservationDetail.isHourly && (
						<DetailRow>
							<Label>Hourly</Label>
							<Value>{reservationDetail.hoursCount}</Value>
						</DetailRow>
					)
				}
				{
					!!reservationDetail.greetAndMeetPrice && isMeetAndGreetIncluded && (
						<DetailRow>
							<Label>Meet and greet/luggage assist </Label>
							<NumericFormat
								value={reservationDetail.greetAndMeetPrice.toFixed(2)}
								thousandSeparator=","
								displayType="text"
								renderText={(value) => <Value>${value}</Value>}
							/>
						</DetailRow>
					)
				}
				{/* <DetailRow>
					<Label>Gratuity</Label>
					<GratuitySelect total={getTotalPrice.toString()} setTip={setTip} />
				</DetailRow> */}
				<DetailRow>
					<Label>Transaction fee</Label>
					<NumericFormat
						value={reservationDetail.transactionFee.toFixed(2)}
						thousandSeparator=","
						displayType="text"
						renderText={(value) => <Value>${value}</Value>}
					/>
				</DetailRow>
			</Body>
			<Footer>
				<NoteTextArea
					rows={1}
					placeholder='Notes / special requests / safety seat'
					onChange={handleNoteChange}
					value={note}
				/>
				<TotalPriceContainer>
					<TotalPriceLabel>Total</TotalPriceLabel>
					<NumericFormat
						value={total}
						thousandSeparator=","
						displayType="text"
						renderText={(value) => <TotalPrice>${value}</TotalPrice>}
					/>
				</TotalPriceContainer>
				<WaitingTimeDisclaimer>{`Chauffeur will wait ${isExtendedWaitTimeApplied() ? '60' : '15'} minutes free of charge`}</WaitingTimeDisclaimer>
			</Footer>
		</Container>
	);
};

export default ReservationDetail;