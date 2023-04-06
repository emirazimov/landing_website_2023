import React from 'react';
import styled from 'styled-components';
import colors from 'constants/colors';

const StyledButton = styled.button`
    padding: 12px 40px;
    background: ${colors.blue};
    border-radius: 30px;
    border: 0px;
    cursor: pointer;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
`;

interface Props {
    className?: string,
    children: JSX.Element | string,
    onClick?: (e: React.MouseEvent<HTMLElement>) => void,
}

const Button = ({ className, children, onClick }: Props) => {
    return (
        <StyledButton
            className={className}
            onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;
