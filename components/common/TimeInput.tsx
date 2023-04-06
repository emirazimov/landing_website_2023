import React from 'react';
import styled from 'styled-components';
import Input from './input';
import { NumberFormatBase } from 'react-number-format';
import { mediaDevice } from 'helpers/responsiveUITools';

const PickupTime = styled(Input)`
    width: 132px;

    ${mediaDevice['mobile']`
        width: auto;
    `}
`;

const TimeInput = ({ label, ...props }) => {
    const format = (val) => {
        if (val === "") return "";
        let hour = val.substring(0, 2);
        let minutes = val.substring(2, 4);

        if (hour.length === 1 && hour[0] > 1) {
            hour = `0${hour[0]}`;
        } else if (hour.length === 2) {
            if (Number(hour) === 0) {
                hour = `01`;
            } else if (Number(hour) > 12) {
                hour = "12";
            }
        }

        if (minutes.length === 1 && minutes[0] > 5) {
            minutes = `0${minutes[0]}`;
        }

        return `${hour}:${minutes}`;
    };

    return (
        //@ts-ignore
        <NumberFormatBase
            customInput={PickupTime}
            format={format}
            placeholder="hh:mm"
            label={label}
            {...props}
        />
    );
};



export default TimeInput;