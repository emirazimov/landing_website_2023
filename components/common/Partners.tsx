import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { imageLoader } from 'helpers/image';
import stripe from 'public/partners/stripe.png';
import gnet from 'public/partners/gnet.png';
import global from 'public/partners/globe.png';
import twilio from 'public/partners/twilio.png';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';

const Container = styled.div`
    margin-top: 150px;

    ${mediaDevice['mobile']`
        margin-top: 70px;
    `}
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 60px;
    margin-bottom: 100px;
    height: 85px;


    ${mediaDevice['mobile']`
        max-height: 40px;
        margin-top: 20px;
        margin-bottom: 50px;
    `}
`;

const Title = styled.span`
	font-weight: 700;
	font-size: ${pixelToRem(23)};
	line-height: 28px;
	text-align: center;

	${mediaDevice['mobile']`
		font-weight: 600;
		font-size: ${pixelToRem(16)};
		line-height: 20px;
		text-align: left;
	`}
`;

const PartnerLogo = styled(Image)<{ special?: number }>`
    ${mediaDevice['mobile']`
        width: 18%;
        height: auto;

        ${(props) => props.special && `
            height: 90%;
            width: auto;
        `}
    `}
`;


const Partners = () => {
    return (
        <Container>
            <Title>Partnered with</Title>
            <Content>
                <PartnerLogo
                    loader={imageLoader}
                    src={stripe}
                    alt="stripe"
                />
                <PartnerLogo
                    loader={imageLoader}
                    src={gnet}
                    alt="gnet"
                />
                <PartnerLogo
                    loader={imageLoader}
                    src={global}
                    alt="globe"
                    special={1}
                />
                <PartnerLogo
                    loader={imageLoader}
                    src={twilio}
                    alt="twilio"
                />
            </Content>
        </Container>
    );
};

export default Partners;