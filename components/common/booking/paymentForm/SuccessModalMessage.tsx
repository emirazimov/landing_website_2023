import React from 'react';
import { Modal } from 'react-responsive-modal';
import styled from 'styled-components';
import colors from 'constants/colors';
import Button from 'components/common/Button';
import SuccessIcon from 'components/svgComponents/SuccessIcon';

const Text = styled.span`
    margin-top: 35px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
`;

const Content = styled.div`
    padding: 20px 45px 10px 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledButton = styled(Button)`
    margin-top: 20px;
    width: 100%;
    background-color: ${colors.darkBlue};
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`;

type Props = {
    isVisible: boolean,
}


const SuccessModalMessage = ({ isVisible }: Props) => {
    function handleClick() {
        location.reload();
    }
    return (
        <Modal
            open={isVisible}
            onClose={() => null}
            center
            showCloseIcon={false}
        >
            <Content>
                <SuccessIcon />
                <Text>You successfully booked a trip!</Text>
                <StyledButton onClick={handleClick}>Done</StyledButton>
            </Content>
        </Modal>
    );
};

export default SuccessModalMessage;
