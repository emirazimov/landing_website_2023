import styled from 'styled-components';
import colors from 'constants/colors';
import Image from 'next/image';
import { mediaDevice } from 'helpers/responsiveUITools';

export const Container = styled.div`
    margin-top: 30px;
    height: 100%;
    padding: 30px 20px 20px 30px;
    position: relative;
    overflow-y: auto;
    box-shadow: 0px 4px 20px #E1E6EA;
    border-radius: 20px;
    flex: 0.4;

    ${mediaDevice['smallScreen']`
        height: auto;
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
    font-size: 12px;
    line-height: 15px;
`;

export const Capacity = styled.span`
    display: block;
    margin-top: 2px;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
`;

export const Price = styled.span`
    font-weight: 600;
    margin-top: 8px;
    font-size: 12px;
    line-height: 15px;
`;

export const SimilarIndicator = styled.span`
    width: fit-content;
    display: block;
    padding: 3px 10px;
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
    margin-top: 10px;
    margin-bottom: 20px;
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
            background: ${colors.ivoryMobile};
        `}
	}
`;

export const Body = styled.div`
    width: 100%;
    flex: 1;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const VehicleItemContainer = styled.div`
    margin: auto;
    flex: 1;
    display: flex;
    width: 100%;
    flex: auto;
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Detail = styled.div`
    display: flex;
    flex-direction: column;
`;

export const VehicleImage = styled(Image)`
    width: 111px;
    height: fit-content;
`;

export const DetailRow = styled.div`
    align-items: baseline;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 16px;
    align-items: flex-start;
    justify-content: space-between;
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
    text-align: right;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
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
    font-size: 14px;
    line-height: 17px;
`;

export const TotalPrice = styled.span`
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
`;

export const WaitingTimeDisclaimer = styled.span`
	margin-top: 12px;
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
