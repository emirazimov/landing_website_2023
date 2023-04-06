import React from 'react';
import styled from 'styled-components';
import chevronRight from 'assets/chevronRight.png';
import Image from 'next/image';
import { imageLoader } from 'helpers/image';
import colors from 'constants/colors';
import { mediaDevice } from 'helpers/responsiveUITools';

const Container = styled.div`
    padding: 15px 20px;
    background: #fff;
    border-radius: 10px;
`;

const ControlContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ControlButton = styled.button`
    height: 26px;
    width: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    background: #fff;
    cursor: pointer;
    margin-bottom: 10px
`;

const LeftRotatedImage = styled(Image)`
    transform: rotate(180deg);
`;

const CurrentDate = styled.span`
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
`;

const SelectedDateAndAnchorContainer = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
`;

const SelectedDateDontainer = styled.div`
    flex: 1;
    height: 100%;
    background: ${colors.ivoryWeb};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${mediaDevice['mobile']`
		background: ${colors.ivoryMobile};
    `}
`;

const Text = styled.span`
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
`;

const TodayButton = styled.button`
    height: 100%;
    background: ${colors.ivoryWeb};
    padding: 10px 20px;
    margin-left: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: unset;
    border: unset;
    cursor: pointer;

    ${mediaDevice['mobile']`
		background: ${colors.ivoryMobile};
    `}
`;

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November','December',
];

const CalendarHeader = ({
    selectedDate,
    setSelectedDate,
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
}) => {
    const today = new Date();

    function resetCalendarToCurrentMonth() {
        changeMonth(today.getMonth());
        changeYear(today.getFullYear());
        setSelectedDate(today);
    }

    return (
        <Container>
            <ControlContainer>
                <ControlButton onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                    <LeftRotatedImage
                        loader={imageLoader}
                        height={8}
                        src={chevronRight}
                        alt="Decrease month button"
                    />
                </ControlButton>
                <CurrentDate>{`${months[date.getMonth()]} ${date.getFullYear()}`}</CurrentDate>
                <ControlButton onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                    <Image
                        loader={imageLoader}
                        height={8}
                        src={chevronRight}
                        alt="Increase month button"
                    />
                </ControlButton>
            </ControlContainer>
            <SelectedDateAndAnchorContainer>
                <SelectedDateDontainer>
                    <Text>{`${months[selectedDate.getMonth()].slice(0, 3)}, ${selectedDate.getDate()} ${selectedDate.getFullYear()}`}</Text>
                </SelectedDateDontainer>
                <TodayButton onClick={resetCalendarToCurrentMonth}>
                    <Text>Today</Text>
                </TodayButton>
            </SelectedDateAndAnchorContainer>
        </Container>

    )
};

export default CalendarHeader;