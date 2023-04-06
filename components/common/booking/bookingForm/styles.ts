import styled from 'styled-components';
import InputButton from 'components/common/InputButton';
import colors from 'constants/colors';
import DatePicker from 'components/common/datePicker';
import { mediaDevice } from 'helpers/responsiveUITools';

export const MeridiemContainer = styled.div`
    margin-left: 10px;
`;

export const MeridiemContent = styled.div`
    display: flex;
    border: 1px solid ${(props: { haserror: boolean }) => props.haserror ? colors.red : 'transparent'};
    border-radius: 10px;
`;

export const ActionButton = styled(InputButton)`
    margin-left: 10px;
`;

export const ActionButtonWithoutMargin = styled(InputButton)`
    margin-left: 0px;
`;

export const DateContainer = styled.div`
    flex: 1;
    display: flex;
    margin-top: 20px;

    ${mediaDevice['mobile']`
        margin-top: 8px;
        margin-right: 0px;
        height: auto;
        overflow-x: hidden;
        flex-direction: column;
    `}
`;

export const TimeContainer = styled.div`
    margin-left: 10px;

    ${mediaDevice['mobile']`
        flex: 1;
        margin-left: 0px;
    `}
`;

export const PickupDate = styled(DatePicker)`
    height: 60px;
    flex: 1;

    ${mediaDevice['mobile']`
        height: auto;
    `}
`;

export const TimeType = styled.span`
    display: block;
    position: relative;
    border: 4px solid transparent;
    line-height: 17px;
    color: ${(props: { active: boolean }) => props.active ? colors.black : colors.grayInactiveWeb};
    font-weight: ${(props: { active: boolean }) => props.active ? 500 : 400};

    border-bottom-color: ${(props: { active: boolean }) => props.active ? colors.blue : 'transparent'};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const TimeAndTypeContainer = styled.div`
    display: flex;

    ${mediaDevice['mobile']`
        margin-top: 8px;
    `}
`;