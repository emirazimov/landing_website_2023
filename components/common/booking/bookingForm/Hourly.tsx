import React from 'react';
import Guide from './Guide';

type Props = {
    renderPickupLocationSelect: () => JSX.Element | any,
    renderPickupDateTime: () => JSX.Element | any,
    renderAirportForm: () => JSX.Element | any,
    renderPassangersCount: () => JSX.Element | any,
    renderHourlyInput: () => JSX.Element | any,
}

const HourlyTrip = ({ renderPickupLocationSelect, renderPickupDateTime, renderAirportForm, renderPassangersCount, renderHourlyInput }: Props) => (
	<div>
		<Guide description="Hourly service allows hiring a professional chauffeur service for a specific number of hours for one or multiple destinations. " />
		{renderPickupLocationSelect()}
		{renderPickupDateTime()}
		{renderAirportForm()}
		{renderHourlyInput()}
		{renderPassangersCount()}
	</div>
);

export default HourlyTrip;
