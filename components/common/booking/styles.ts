import styled from 'styled-components';
import colors from 'constants/colors';
import Input from 'components/common/input';
import { mediaDevice } from 'helpers/responsiveUITools';

export const FormContainer = styled.div`
    flex: 1;
    height: 100%;
    position: relative;
    overflow: auto;
    margin-right: 20px;
    box-shadow: 0px 4px 20px #E1E6EA;
    border-radius: 20px;
    padding: 30px 10px 50px 20px;
	background-color: white;
    user-select: auto !important;

    ${mediaDevice['smallScreen']`
        margin-top: 30px;
        margin-right: 0px;
        height: auto;
        // overflow-x: hidden;
        padding: 12px 16px;
    `}
    
    ::-webkit-scrollbar {
        width: 14px;
        display: block;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        border-radius: 9999px;
        background-color: ${colors.lightGray};
    }

    ::-webkit-scrollbar-track-piece:end {
        background: transparent;
        margin-bottom: 10px; 
    }
    
    ::-webkit-scrollbar-track-piece:start {
        background: transparent;
        margin-top: 10px;
    }
`;

export const Title = styled.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
	display: block;

    ${mediaDevice['smallScreen']`
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
    `}
`;

export const InputContainer = styled.div`
    margin-top: 20px;    
    display: flex;
    flex: 1;

    ${mediaDevice['mobile']`
        margin-top: 8px;    
    `}
`;

export const Placeholder = styled.div`
    height: 100%;
    width: ${({width = 10}: { width?: number }) => width}px;
`;

export const ErrorMessage = styled.span`
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	color: ${colors.red};
`;

export const Row = styled.div`
    display: flex;
`;

export const StyledInput = styled(Input)`
    flex: 1;
`;