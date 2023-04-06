import React from 'react';
import Guide from './Guide';

type Props = {
    renderPickupLocationSelect: () => JSX.Element | any,
    renderPickupDateTime: () => JSX.Element | any,
    renderAirportForm: () => JSX.Element | any,
    renderPassangersCount: () => JSX.Element | any,
}

const OneWayTrip = ({ renderPickupLocationSelect, renderPickupDateTime, renderAirportForm, renderPassangersCount }: Props) => {
    return (
        <div>
			<Guide description="One-way transportation provides a professional chauffeur service from point A to point B." />
            {renderPickupLocationSelect()}
            {renderPickupDateTime()}
            {renderAirportForm()}
            {renderPassangersCount()}
        </div>
    );
};

export default OneWayTrip;