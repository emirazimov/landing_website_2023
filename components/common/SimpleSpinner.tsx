import styled, { keyframes } from 'styled-components';
import colors from 'constants/colors';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.span`
    margin-right: 12px;
    width: 16px;
    height: 16px;
    border: 2px solid #FFF;
    border-bottom-color: ${colors.green};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${rotate} 1s linear infinite;
`;

export default Spinner;