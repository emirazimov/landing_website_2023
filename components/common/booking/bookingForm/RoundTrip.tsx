import React from 'react';
import styled from 'styled-components';
import colors from 'constants/colors';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import Guide from './Guide';

const Indicator = styled.div`
    margin-top: 20px;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 0.3px solid ${colors.grayInactiveWeb};
    font-weight: 400;
    font-size: ${pixelToRem(14)};
    line-height: 17px;
    color: ${colors.gray};

    ${mediaDevice['mobile']`
        height: 30px;
        width: 30px;
        border: 0.3px solid ${colors.grayInactiveMobile};
        font-weight: 500;
        font-size: ${pixelToRem(14)};
        line-height: 17px;
        color: #000;
    `}
`;

const IndicatorLabel = styled.span`
    margin-left: 10px;
    display: block;
    font-weight: 400;
    font-size: ${pixelToRem(14)};
    line-height: 17px;
    color: ${colors.gray};
`;

const IndicatorContainer = styled.div`
    display: flex;
    align-items: baseline;
`;

type Props = {
    renderPickupLocationSelect: () => JSX.Element | any,
    renderPickupDateTime: () => JSX.Element | any,
    renderAirportForm: () => JSX.Element | any,
    renderPassangersCount: () => JSX.Element | any,
    renderRountTripForm: () => JSX.Element | any,
}

const RoundTrip = ({ renderPickupLocationSelect, renderPickupDateTime,
    renderAirportForm, renderPassangersCount, renderRountTripForm }: Props) => {
    return (
        <div>
			<Guide description="Round trip means a professional chauffeur service from point to A to B and return to point A or any other destination during the same or any other day." />
            <IndicatorContainer>
                <Indicator>1</Indicator>
                <IndicatorLabel>Pickup details</IndicatorLabel>
            </IndicatorContainer>
            {renderPickupLocationSelect()}
            {renderPickupDateTime()}
            <IndicatorContainer>
                <Indicator>2</Indicator>
                <IndicatorLabel>Return details</IndicatorLabel>
            </IndicatorContainer>
            {renderRountTripForm()}
            {renderAirportForm()}
            {renderPassangersCount()}
        </div>
    );
};

export default RoundTrip;