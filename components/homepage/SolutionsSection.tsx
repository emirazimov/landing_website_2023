import React from 'react';
import styled from 'styled-components';
import SectionTitle from 'components/common/SectionTitle';
import b2b from 'public/solutions/b2b.webp';
import b2c from 'public/solutions/b2c.webp';
import { PAGE_BLOCKS, ROUTES } from 'constants/routes';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';

import Image from 'next/image';
import { imageLoader } from 'helpers/image';
import Link from 'next/link';
import colors from 'constants/colors';

const Container = styled.div`
    margin-top: 120px;

    ${mediaDevice['mobile']`
        margin-top: 100px;
    `}
`;

const Content = styled.div`
    margin-top 40px;
    display: flex;

    ${mediaDevice['mobile']`
        margin-top: 0px;
        flex-direction: column;
    `}
`;

const SolutionContainer = styled.div`
    flex: 1;

    ${(props: { isFirst?: boolean }) => props.isFirst && 'margin-right: 110px;'}

    ${mediaDevice['mobile']`
        margin-right: 0px;
    `}
`;

const Title = styled.span`
    display: block;
    margin-top: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: ${pixelToRem(23)};
    line-height: 28px;

    ${mediaDevice['mobile']`
        font-weight: 600;
        font-size: ${pixelToRem(16)};
        line-height: 20px;
    `}
`;

const Description = styled.span`
    display: block;
    margin-top: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: ${pixelToRem(18)};
    line-height: 30px;

    ${mediaDevice['mobile']`
        margin-top: 10px;
        font-weight: 400;
        font-size: ${pixelToRem(12)};
        line-height: 19px;
    `}
`;

const PartnershipOfferText = styled.span`
    margin-top: 10px;
    font-weight: 600;
    font-size: ${pixelToRem(18)};
    line-height: 22px;

    ${mediaDevice['mobile']`
        font-size: ${pixelToRem(12)};
        line-height: 15px;
    `}
`;

const PartnershipOfferLink = styled(Link)`
    color: ${colors.blue};
`;

const StyledImage = styled(Image)`
    width: 515px;
    height: 283px;
    margin-top: 40px;
    margin-bottom: 20px;

    ${mediaDevice['mobile']`
        width: 100%;
        height: auto;
        margin-top: 25px;
        margin-bottom: 20px;
    `}
`;

const SolutionsSection = () => {
    return (
        <Container id={PAGE_BLOCKS.SOLUTIONS}>
            <SectionTitle>Solutions</SectionTitle>
            <Content>
                <SolutionContainer isFirst={true}>
                    <StyledImage
                        loader={imageLoader}
                        src={b2c}
                        alt="Book executive car service hassle-free. Get instant access to reliable providers and enjoy a comfortable ride. Choose Bookinglane today!"
                    />
                    <Title>B2C</Title>
                    <Title>Looking for executive car service?</Title>
                    <Description>
                        We provide the leading technology solutions that instantly connect you with reliable local executive car and limousine service providers. No more waiting for quotes, dealing with complicated and exhausting booking process, last minute cancellations or unprofessional drivers. Within couple of clicks, book your limo or any other black car transportation and enjoy your ride!
                    </Description>
                </SolutionContainer>
                <SolutionContainer>
                    <StyledImage
                        loader={imageLoader}
                        src={b2b}
                        alt="Revolutionize your Black Car Service with Our Management Solutions. Stay on Top of Schedule, Client Communication, and Opportunities"
                    />
                    <Title>B2B</Title>
                    <Title>Are you an executive car service provider?</Title>
                    <Description>
                        With our comprehensive business management solutions, manage your black car service from the palm of your hand. Always be on top of your schedule, client communication and business opportunities. We not only connect executive car service providers with new potential clientelle but also provide a lifetime opportunity to join the extensive affiliate network of partners in the limousine and executive car service industry.
                    </Description>
                    <PartnershipOfferText>Limited spots available. <PartnershipOfferLink href={ROUTES.B2B}>Become our partner</PartnershipOfferLink></PartnershipOfferText>
                </SolutionContainer>
            </Content>
        </Container>
    );
};

export default SolutionsSection;
