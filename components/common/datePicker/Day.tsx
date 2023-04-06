import React, { memo } from 'react';
import styled from 'styled-components';
import colors from 'constants/colors';
import { mediaDevice } from 'helpers/responsiveUITools';

const DayContainer = styled.div`
    width: 32px;
    height: 32px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    background-color: ${(props: { selected: boolean, pastdate: boolean }) => props.selected ? colors.darkBlue : colors.white};
    color: ${(props: { selected: boolean, pastdate: boolean }) => props.selected ? colors.white : colors.black};

    ${(props: { selected: boolean, pastdate: boolean }) => props.pastdate && `color: ${colors.grayInactiveWeb};`}

    ${mediaDevice['mobile']`
        ${(props: { selected: boolean, pastdate: boolean }) => props.pastdate && `color: ${colors.grayInactiveMobile};`}
    `}
`;

interface Props {
    day: number,
    date: Date,
    setSelectedDate: (date: Date) => void,
    selectedDate: Date,
}

const Day = ({ day, date, setSelectedDate, selectedDate }: Props) => {
    function isSelected() {
        if (
            date.getDate() === selectedDate.getDate()
            && date.getFullYear() === selectedDate.getFullYear()
            && date.getMonth() === selectedDate.getMonth()
        ) {
            return true;
        }

        return false;
    }
    function isInvalid() {
        const today = new Date();

        if (date.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)) {
            return true;
        }

        return false;
    }

    function handleSelectDate() {
        if (!isInvalid()) {
            setSelectedDate(date);
        }
    }

    return (
        <DayContainer
            onClick={handleSelectDate}
            selected={isSelected()}
            pastdate={isInvalid()}
        >
            {day}
        </DayContainer>
    );
};

export default memo(Day);