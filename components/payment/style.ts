import styled from 'styled-components';
import colors from 'constants/colors';
import Image from 'next/image';
import { mediaDevice } from 'helpers/responsiveUITools';

export const Container = styled.div`
    height: 520px;
    flex: 0.4;
    padding: 30px 20px 0px 30px;
    position: relative;
    box-shadow: 0px 4px 20px #E1E6EA;
    border-radius: 20px;
    padding: 20px 20px 20px 20px;
    
    ${mediaDevice['mobile']`
        box-shadow: none;
        padding-bottom: 0px;
    `}
`;

export const Header = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.span`
    margin-top: 25px;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
`;

export const CenteredRow = styled.div`
    display: flex;
    align-items: center;
`;

export const Body = styled.div`
    width: 100%;
    flex: 1;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const CompanyLogo = styled(Image)`
    height: 60px;
    width: 60px;
    border-radius: 50%;
`;

export const LogoPlaceholder = styled.div`
	border: 0.4px solid ${colors.green};
	height: 60px;
	width: 60px;
	border-radius: 50%;
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
`;

export const Footer = styled.div`
    position: sticky;
    bottom: 0px;
    width: 100%;
    background: #fff;
    border-top: 0.3px solid ${colors.grayInactiveWeb};
    display: flex;
    align-items: center;
    justify-content: space-between;
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
