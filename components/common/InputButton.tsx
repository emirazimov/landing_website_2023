import React from 'react';
import styled from 'styled-components';
import colors from 'constants/colors';
import { mediaDevice } from 'helpers/responsiveUITools';

const Container = styled.button`
    height: 60px;
    width: 60px;
    background: ${colors.ivoryWeb};
    border-radius: 10px;
    outline: none;
    border: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${mediaDevice['mobile']`
		background: ${colors.ivoryMobile};
    `}
`;

interface Props {
    children: any | JSX.Element | string,
    className?: string,
    onClick: () => void,
}

const InputButton = ({ children, className, onClick, ...props }: Props) => {
    return (
        <Container
            className={className}
            onClick={onClick}
            tabIndex={-1}
            {...props}
        >
            {children}
        </Container>
    );
};

export default InputButton;