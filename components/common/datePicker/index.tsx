import React, { useState, useCallback, forwardRef, useRef, useEffect } from 'react';
import Input from 'components/common/input';
import DatePickerLib from 'react-datepicker';
import styled from 'styled-components';
import CalendarIcon from 'components/svgComponents/CalendarIcon';
import colors from 'constants/colors';
import Button from 'components/common/Button';
import { mediaDevice } from 'helpers/responsiveUITools';
import Day from './Day';
import CalendarHeader from './CalendarHeader';


const Container = styled.div`
    & .react-datepicker-wrapper {
        display: flex;
    }
`;

const CalendarContainer = styled.div`
    box-shadow: 0px 4px 10px #C1C6CB;
    border-radius: 10px;
    background-color: #fff;
    border: 0px;
    display: flex;
    flex-direction: column;

    & .react-datepicker__header {
        background-color: #fff;
        border-bottom: 10px;
        border-radius: 10px;
        padding: 0px;
    }

    & .react-datepicker__month {
        margin: 0px;
        padding: 0px 16px;
    }

    & .react-datepicker__day-names {
        margin-bottom: 0px;
    }

    & .react-datepicker__day-name {
        width: 32px;
        height: 32px;
        margin-bottom: -10px;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
    }

    & .react-datepicker__day {
        width: unset;

        :hover {
            border-radius: 50%;
            background-color: ${colors.ivoryWeb};

            ${mediaDevice['mobile']`
                background-color: ${colors.ivoryMobile};
            `}
        }
    }

    & .react-datepicker__day--keyboard-selected {
        border-radius: 50%;
        background-color: unset;
        color: black;
    }
`;

const StyledInput = styled(Input)`
    & input {
        ${(props: { graycolor: boolean }) => props.graycolor && `color: ${colors.grayPlaceholder}`}
    }
`;

const Footer = styled.div`
    width: 100%;
    padding: 16px 20px;
    display: flex;
    align-items: center;
`;

const ConfirmButton = styled(Button)`
    flex: 1;
    border: 1px solid ${colors.darkBlue};

`;

const CancelButton = styled(ConfirmButton)`
    background: #fff;
    color: ${colors.darkBlue};
    margin-right: 10px;
`;

interface Props {
    value: Date | null,
    setValue: (newDate: Date) => void,
    className?: string,
    errorMessage?: { message: string },
    minDate?: Date,
    isReturn?: boolean
}

const DatePicker = ({ value, className, setValue, errorMessage, minDate = new Date(), isReturn, ...props }: Props) => {
    const datePicker = useRef<{
        setOpen: (arg: boolean) => void,
        state: {
            open: boolean
        }
    }>();
    const [selectedDate, setSelectedDate] = useState(null);

	function getPrefixZero(value: number) {
		if (value < 10) {
			return `0${value}`;
		}

		return value;
	}

    const CustomInput = forwardRef(({ onClick }: { onClick?: () => void }, ref) => {
        function getInputValue() {
            if (value) {
                return `${getPrefixZero(value.getMonth() + 1)}/${getPrefixZero(value.getDate())}/${value.getFullYear()}`;
            }

            if (datePicker?.current?.state?.open) {
                return 'mm/dd/yyyy';
            }

            return '';
        }

        const renderCalendarIcon = useCallback(() => <CalendarIcon />, []);

        return (
            <StyledInput
                graycolor={!value}
                label={isReturn ? 'Pick up date' : 'Return date'}
                value={getInputValue()}
                placeholder="mm/dd/yyyy"
                readonly
                errorMessage={errorMessage}
                renderExtra={renderCalendarIcon}
                onFocus={onClick}
                {...props}
            />
        );
    });

    const PickerContainer = ({ className, children }) => {
        return (
            <CalendarContainer className={className}>
                {children}
                {renderFooter()}
            </CalendarContainer>
        );
    };

    function handleCancel() {
        setSelectedDate(null);
        handleClose(false);
    }

    function handleClose(applyNewValue = true) {
        if (applyNewValue && selectedDate) {
            setValue(selectedDate);
        }

        datePicker?.current?.setOpen(false);
    }

    function handleSaveDate() {
        setValue(selectedDate);
        handleClose();
    }

    function onCalendarOpen() {
        if (value) {
            setSelectedDate(value);
        } else {
            setSelectedDate(new Date());
        }
    }

    function renderHeader(props) {
        return (
            <CalendarHeader
                selectedDate={selectedDate ?? new Date()}
                setSelectedDate={setSelectedDate}
                {...props}
            />
        )
    }

    function renderFooter() {
        return (
            <Footer>
                <CancelButton onClick={handleCancel}>Cancel</CancelButton>
                <ConfirmButton onClick={handleSaveDate}>Done</ConfirmButton>
            </Footer>
        );
    }

    function renderDayContents(day, date) {
        return (
            <Day
                selectedDate={selectedDate ?? new Date()}
                setSelectedDate={setSelectedDate}
                day={day}
                date={date}
            />
        );
    }

    return (
        <Container className={className}>
            <DatePickerLib
                // excludeDates
                ref={datePicker}
                popperPlacement="bottom-start"
                customInput={<CustomInput />}
                renderCustomHeader={renderHeader}
                renderDayContents={renderDayContents}
                calendarIcon
                openToDate={selectedDate}
                onCalendarClose={handleClose}
                onCalendarOpen={onCalendarOpen}
                showDisabledMonthNavigation
                showPopperArrow={false}
                shouldCloseOnSelect={false}
                calendarContainer={PickerContainer}
            />
        </Container>
    );
};

export default DatePicker;
