import React, { useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import useIsomorphicLayoutEffect from 'components/hooks/useIsomorphicLayoutEffect';
import PlusIcon from 'components/svgComponents/PlusIcon';
import MinusIcon from 'components/svgComponents/MinusIcon';
import TimeInput from 'components/common/TimeInput';
import Checkbox from 'components/common/Checkbox';
import { useSwipeable } from 'react-swipeable';
import { AIRPORT_TYPE, MIN_HOURLY, BOOKING_STEPS } from 'constants/booking';
import { FormContainer as Container, ErrorMessage, InputContainer, Title, StyledInput, Row } from 'components/common/booking/styles';
import useWindowSize from 'components/hooks/useWindowSize';
import { isMobile } from 'helpers/responsiveUITools';
import LocationListselect from './locationListselect';
import OneWayTrip from './OneWayTrip';
import HourlyTrip from './Hourly';
import RoundTrip from './RoundTrip';
import AirlineSelect from './AirlineSelect';
import { ActionButton, ActionButtonWithoutMargin, PickupDate, DateContainer, TimeType, MeridiemContainer, MeridiemContent, TimeContainer, TimeAndTypeContainer } from './styles';
import TabsHeader, { TAB_INDEX } from './TabsHeader';
import styled from 'styled-components';
import Input from 'components/payment/CurrencyInput';

const BookingFormContainer = styled(Container)`
	padding-top: 0
`

const BookingForm = ({ renderControllButtons }: { renderControllButtons: (index: number) => JSX.Element }) => {
	const [tabIndex, setTabIndex] = useState(TAB_INDEX.ONE_WAY_TRIP);
	const { setValue: setFormValue, trigger, control, watch, formState: { errors, isSubmitted }, setFocus } = useFormContext();
	const swipeHandlers = useSwipeable({
		onSwiped: handleSwipe,
		preventScrollOnSwipe: true,
		delta: { up: 1000, down: 1000, right: 30, left: 30 }
	});
	const windowSize = useWindowSize();

	const values = watch();

	// useEffect(() => {
	// 	const firstError = errors?.pickup && Object.keys(errors?.pickup as any).reduce((field, a) => {
	// 		return !!errors[field as any] ? field : a;
	// 	}, null);
		
	// 	console.log(errors.pickup, firstError)
	  
	// 	if (firstError) {
	// 	  setFocus(firstError);
	// 	}
	// }, [errors, setFocus, values]);

	useIsomorphicLayoutEffect(() => {
		if (tabIndex === TAB_INDEX.ONE_WAY_TRIP) {
			setFormValue('isHourly', false);
			setFormValue('isRoundTrip', false);
		} else if (tabIndex === TAB_INDEX.ROUNT_TRIP) {
			[
				{
					name: 'isHourly',
					value: false,
				},
				{
					name: 'isRoundTrip',
					value: true,
				}
			].forEach(({ name, value }) => setFormValue(name, value));
		} else if (tabIndex === TAB_INDEX.HOURLY_TRIP) {
			[
				{
					name: 'isHourly',
					value: true,
				},
				{
					name: 'isRoundTrip',
					value: false,
				}
			].forEach(({ name, value }) => setFormValue(name, value));
		}
	}, [tabIndex]);

	const setPickupDatePickerValue = (newValue: Date) => {
		setFormValue('pickup.date', newValue, { shouldDirty: true, shouldTouch: true });
		if (isSubmitted) {
			trigger();
		}
	}

	const setAirline = (airlineData: { id: number, name: string }) => setFormValue('airline', airlineData, { shouldDirty: true, shouldTouch: true });

	const setReturnPickupDatePickerValue = (newValue: Date) => {
		setFormValue('returnPickup.date', newValue, { shouldDirty: true, shouldTouch: true });
		if (isSubmitted) {
			trigger();
		}
	}

	const setMeridiemValue = ({ newValue, name }: { newValue: string, name: string }) => {
		setFormValue(name, newValue, { shouldDirty: true, shouldTouch: true });
		if (isSubmitted) {
			trigger();
		}
	}

	const incrementPassengersCount = () => {
		if (isNaN(parseInt(values.passengerCount))) {
			setFormValue('passengerCount', '1', { shouldDirty: true, shouldTouch: true });
		} else {
			setFormValue('passengerCount', `${parseInt(values.passengerCount) + 1}`, { shouldDirty: true, shouldTouch: true });
		}
	}

	const decrementPassengersCount = () => {
		if (isNaN(parseInt(values.passengerCount)) === false && parseInt(values.passengerCount) > 1) {
			setFormValue('passengerCount', `${parseInt(values.passengerCount) - 1}`, { shouldDirty: true, shouldTouch: true });
		}
	}

	function validateReturnPickupDate(selectedDate) {
		if (!selectedDate) {
			return 'Date is required';
		}

		if (values.pickup.date) {
			const pickupDate = new Date(values.pickup.date);
			const returnDate = new Date(selectedDate);

			if (pickupDate.getTime() > selectedDate.getTime()) {
				return 'Return date can not be earlier that pickup date';
			}
		}

		return true;
	}

	function handleSwipe(eventData) {
		if (eventData.dir === 'Left') {
			setTabIndex((state) => {
				if (state < 2) {
					return state + 1;
				}

				return state;
			});
		} else if (eventData.dir === 'Right') {
			setTabIndex((state) => {
				if (state > 0) {
					return state - 1;
				}

				return state;
			});
		}
	}

	function renderHourlyInput() {
		const incrementCount = () => {
			if (isNaN(parseInt(values.hoursCount))) {
				setFormValue('hoursCount', `${MIN_HOURLY}`, { shouldDirty: true, shouldTouch: true });
			} else {
				setFormValue('hoursCount', `${parseInt(values.hoursCount) + 1}`, { shouldDirty: true, shouldTouch: true });
			}

			if (isSubmitted) {
				trigger();
			}
		}

		const decrementCount = () => {
			if (isNaN(parseInt(values.hoursCount)) === false && parseInt(values.hoursCount) > MIN_HOURLY) {
				setFormValue('hoursCount', `${parseInt(values.hoursCount) - 1}`, { shouldDirty: true, shouldTouch: true });
			}
			if (isSubmitted) {
				trigger();
			}
		}

		if (values.isHourly) {
			return (
				<>
					<InputContainer>
						<Controller
							name="hoursCount"
							control={control}
							render={({ field }) => (
								<StyledInput
									type="number"
									errorMessage={errors['hoursCount']}
									label="Hours"
									readonly
									{...field}
									ref={null}
								/>
							)}

							rules={{
								required: "This field is required",
								validate: {
									valid: (v: string) => parseInt(v, 10) < MIN_HOURLY ? 'You can book for minimum of 3 hours' : true,
								}
							}}
						/>
						<Row>
							<ActionButton onClick={decrementCount}>
								<MinusIcon isActive={values.hoursCount > 3 && !isNaN(parseInt(values.hoursCount))} />
							</ActionButton>
							<ActionButton onClick={incrementCount}>
								<PlusIcon isActive />
							</ActionButton>
						</Row>
					</InputContainer>
				</>
			);
		}
		return (null);
	}

	function renderPickupLocationSelect() {
		return (
			<LocationListselect name="pickup.locations" />
		);
	}

	function renderPickupDateTime() {
		return (
			<DateContainer>
				<Controller
					name="pickup.date"
					control={control}
					render={({ field }) => (
						<PickupDate
							errorMessage={errors['pickup']?.['date']}
							setValue={setPickupDatePickerValue}
							isReturn
							{...field}
						/>
					)}

					rules={{
						validate: {
							valid: (v: string) => v !== null ? true : 'Date is required',
						}
					}}
				/>
				<TimeAndTypeContainer>
					<TimeContainer>
						<Controller
							name="pickup.time"
							control={control}
							render={({ field }) => (
								<TimeInput
									label="Pick up time"
									errorMessage={errors['pickup']?.['time']}
									{...field}
									ref={null}
								/>
							)}

							rules={{
								required: "Time is required",
								validate: {
									valid: (v: string) => v.length === 5 ? true : 'Mandatory time format hh:mm',
								}
							}}
						/>
					</TimeContainer>

					<Controller
						name="pickup.meridiem"
						control={control}
						render={({ field }) => (
							<MeridiemContainer>
								<MeridiemContent haserror={!!errors['pickup']?.['meridiem']}>
									<ActionButtonWithoutMargin onClick={() => setMeridiemValue({ name: 'pickup.meridiem', newValue: 'AM' })}>
										<TimeType active={values.pickup.meridiem === "AM"}>AM</TimeType>
									</ActionButtonWithoutMargin>
									<ActionButton onClick={() => setMeridiemValue({ name: 'pickup.meridiem', newValue: 'PM' })}>
										<TimeType active={values.pickup.meridiem === "PM"}>PM</TimeType>
									</ActionButton>
								</MeridiemContent>
								{errors['pickup']?.['meridiem'] && <ErrorMessage>{errors['pickup']?.['meridiem'].message}</ErrorMessage>}
							</MeridiemContainer>
						)}

						rules={{
							required: 'Select AM or PM',
						}}
					/>
				</TimeAndTypeContainer>
			</DateContainer>
		);
	}

	function renderPassangersCount() {
		if (isMobile(windowSize.width)) {
			return null;
		}

		return (
			<InputContainer>
				<Controller
					name="passengerCount"
					control={control}
					render={({ field }) => (
						<StyledInput
							type="number"
							readonly
							label="Number of passengers"
							{...field}
							ref={null}
						/>
					)}
					rules={{
						required: "This field is required",
						validate: {
							valid: (v: string) => parseInt(v, 10) > 0 ? true : 'Must be more than 0',
						},
					}}
				/>
				<Row>
					<ActionButton onClick={decrementPassengersCount} aria-label="Increment">
						<MinusIcon isActive={!isNaN(parseInt(values.passengerCount)) && parseInt(values.passengerCount) > 1} />
					</ActionButton>
					<ActionButton onClick={incrementPassengersCount} aria-label="Decrement">
						<PlusIcon isActive />
					</ActionButton>
				</Row>
			</InputContainer>
		);
	}

	function renderAirportForm() {
		if (isMobile(windowSize.width)) {
			return null;
		}

		if (values.pickup.locations.map(({ placeType }) => placeType).includes(AIRPORT_TYPE)) {
			const incrementCount = () => {
				if (isNaN(parseInt(values.luggageCount))) {
					setFormValue('luggageCount', '0', { shouldDirty: true, shouldTouch: true });
				} else {
					setFormValue('luggageCount', `${parseInt(values.luggageCount) + 1}`, { shouldDirty: true, shouldTouch: true });
				}

				if (isSubmitted) {
					trigger();
				}
			}

			const decrementCount = () => {
				if (isNaN(parseInt(values.luggageCount)) === false && values.luggageCount !== '0') {
					setFormValue('luggageCount', `${parseInt(values.luggageCount) - 1}`, { shouldDirty: true, shouldTouch: true });
				}
				if (isSubmitted) {
					trigger();
				}
			}

			return (
				<>
					<InputContainer>
						<AirlineSelect
							onAirlineSelect={setAirline}
							selectedAirline={values.airline}
						/>
					</InputContainer>
					<InputContainer>
						<Controller
							name="flightNumber"
							control={control}
							render={({ field }) => (
								<StyledInput
									label="Flight number"
									{...field}
									ref={null}
								/>
							)}
						/>
					</InputContainer>
					<InputContainer>
						<Controller
							name="luggageCount"
							control={control}
							render={({ field }) => (
								<StyledInput
									type="number"
									errorMessage={errors['luggageCount']}
									label="Luggage count"
									readonly
									{...field}
									ref={null}
								/>
							)}
						/>
						<Row>
							<ActionButton onClick={decrementCount}>
								<MinusIcon isActive={values.luggageCount !== '0' && !isNaN(parseInt(values.luggageCount))} />
							</ActionButton>
							<ActionButton onClick={incrementCount}>
								<PlusIcon isActive />
							</ActionButton>
						</Row>
					</InputContainer>
					<Controller
						name="meetAndGreet"
						control={control}
						render={({ field }) => (
							<Checkbox
								label="Meet and greet/luggage assist"
								{...field}
								ref={null}
							/>
						)}
					/>
				</>
			);
		}

		return null;
	}

	function renderRountTripForm() {
		if (values.isRoundTrip) {
			return (
				<>
					<LocationListselect name="returnPickup.locations" />
					<DateContainer>
						<Controller
							name="returnPickup.date"
							control={control}
							render={({ field }) => (
								<PickupDate
									errorMessage={errors['returnPickup']?.['date']}
									setValue={setReturnPickupDatePickerValue}
									{...field}
									minDate={values.pickupDate ? values.pickupDate : undefined}
								/>
							)}

							rules={{
								validate: {
									valid: validateReturnPickupDate,
								}
							}}
						/>
						<TimeAndTypeContainer>
							<TimeContainer>
								<Controller
									name="returnPickup.time"
									control={control}
									render={({ field }) => (
										<TimeInput
											label="Return time"
											errorMessage={errors['returnPickup']?.['time']}
											{...field}
											ref={null}
										/>
									)}

									rules={{
										required: "Time is required",
										validate: {
											valid: (v: string) => v.length === 5 ? true : 'Mandatory time format hh:mm',
										}
									}}
								/>

							</TimeContainer>
							<Controller
								name="returnPickup.meridiem"
								control={control}
								render={({ field }) => (
									<MeridiemContainer>
										<MeridiemContent haserror={!!errors['returnPickup']?.['meridiem']}>
											<ActionButtonWithoutMargin onClick={() => setMeridiemValue({ name: 'returnPickup.meridiem', newValue: 'AM' })}>
												<TimeType active={values.returnPickup.meridiem === "AM"}>AM</TimeType>
											</ActionButtonWithoutMargin>
											<ActionButton onClick={() => setMeridiemValue({ name: 'returnPickup.meridiem', newValue: 'PM' })}>
												<TimeType active={values.returnPickup.meridiem === "PM"}>PM</TimeType>
											</ActionButton>
										</MeridiemContent>
										{errors['returnPickup']?.['meridiem'] && <ErrorMessage>{errors['returnPickup']?.['meridiem'].message}</ErrorMessage>}
									</MeridiemContainer>
								)}

								rules={{
									required: 'Select AM or PM',
								}}
							/>
						</TimeAndTypeContainer>
					</DateContainer>
				</>
			);
		}

		return null;
	}

	return (
		<BookingFormContainer {...swipeHandlers}>
			<TabsHeader index={tabIndex} onChangeIndex={setTabIndex} />
			{
				tabIndex === TAB_INDEX.ONE_WAY_TRIP && (
					<OneWayTrip
						renderPickupLocationSelect={renderPickupLocationSelect}
						renderPickupDateTime={renderPickupDateTime}
						renderPassangersCount={renderPassangersCount}
						renderAirportForm={renderAirportForm}
					/>
				)
			}
			{
				tabIndex === TAB_INDEX.ROUNT_TRIP && (
					<RoundTrip
						renderPickupLocationSelect={renderPickupLocationSelect}
						renderPickupDateTime={renderPickupDateTime}
						renderPassangersCount={renderPassangersCount}
						renderAirportForm={renderAirportForm}
						renderRountTripForm={renderRountTripForm}
					/>
				)
			}
			{
				tabIndex === TAB_INDEX.HOURLY_TRIP && (
					<HourlyTrip
						renderPickupLocationSelect={renderPickupLocationSelect}
						renderPickupDateTime={renderPickupDateTime}
						renderPassangersCount={renderPassangersCount}
						renderAirportForm={renderAirportForm}
						renderHourlyInput={renderHourlyInput}

					/>
				)
			}
			{renderControllButtons(BOOKING_STEPS.BOOKING_FORM)}
		</BookingFormContainer>
	);
};

export default BookingForm;
