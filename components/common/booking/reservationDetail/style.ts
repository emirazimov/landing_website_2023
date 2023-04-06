import styled from 'styled-components';
import colors from 'constants/colors';
import Image from 'next/image';
import { mediaDevice } from 'helpers/responsiveUITools';

export const Container = styled.div`
    height: 100%;
    padding: 30px 20px 10px 30px;
    position: relative;
    overflow-y: auto;
    box-shadow: 0px 4px 20px #E1E6EA;
    border-radius: 20px;
    flex: 0.4;

    ${mediaDevice['smallScreen']`
		display: none;
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

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ReservationHeaderDetail = styled.div`
    display: flex;
    flex-direction: column;
`;

export const VehicleType = styled.span`
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
`;

export const Capacity = styled.span`
    font-weight: 400;
    font-size: 14px;
    margin-left: 10px;
    line-height: 17px;
    color: ${colors.gray};
`;

export const Price = styled.span`
    font-weight: 600;
    margin-top: 8px;
    font-size: 22px;
    line-height: 27px;
`;

export const CenteredRow = styled.div`
    display: flex;
    align-items: center;
`;

export const SimilarIndicator = styled.span`
    width: fit-content;
    display: block;
    padding: 4px 16px;
    margin-top: 8px;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    border: 1px solid ${colors.blue};
    border-radius: 10px;
    color: ${colors.blue};
`;

export const NoteTextArea = styled.textarea`
    width: 100%;
    background: ${colors.ivoryWeb};
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 10px;
    resize: none;
    display:inline-block;
    vertical-align:middle;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    outline: none;
    border: 0px;

    ${mediaDevice['mobile']`
		background: ${colors.ivoryMobile};
    `}

    ::placeholder {
	    color: ${colors.grayInactiveWeb};
	    opacity: 1;

        ${mediaDevice['mobile']`
            background: ${colors.grayInactiveMobile};
        `}
	}

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

export const Body = styled.div`
    width: 100%;
    flex: 1;
    margin-top: 10px;
    margin-bottom: 20px;
`;


export const VehicleImage = styled(Image)`
    width: auto;
    max-width: 55%;
`;

export const DetailRow = styled(CenteredRow)`
    margin-top: 16px;
    justify-content: space-between;
    align-items: baseline;
`;

export const Label = styled.span`
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    margin-right: 50px;
    color: ${colors.gray};
    white-space: nowrap;
`;

export const Value = styled.span`
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: right;
`;

export const Footer = styled.div`
    position: sticky;
    bottom: 0px;
    width: 100%;
    background: #fff;
    border-top: 0.3px solid ${colors.grayInactiveWeb};
    padding: 20px 0px;

    ${mediaDevice['mobile']`
        border-top: 0.3px solid ${colors.grayInactiveMobile};
    `}
`;

export const TotalPriceLabel = styled.span`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
`;

export const TotalPrice = styled.span`
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
`;

export const WaitingTimeDisclaimer = styled.span`
	margin-top: 6px;
	display: block;
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
`;

export const TotalPriceContainer = styled.div`
	width: 100%;
	display: flex;
    align-items: center;
    justify-content: space-between;
`;
