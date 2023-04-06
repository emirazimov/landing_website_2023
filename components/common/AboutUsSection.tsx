import React from 'react';
import styled from 'styled-components';
import SectionTitle from 'components/common/SectionTitle';
import Image from 'next/image';
import { imageLoader } from 'helpers/image';
import logoImg from 'public/verticalLogo.png';
import { PAGE_BLOCKS } from 'constants/routes';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import { isMobile } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';


const Container = styled.div`
    margin-top: 160px;

    ${mediaDevice['mobile']`
        margin-top: 100px;
    `}
`;

const Content = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;

    ${mediaDevice['mobile']`
        flex-direction: column-reverse;
    `}
`;

const LogoImage = styled(Image)`
    width: 260px;
    height: auto;

    ${mediaDevice['mobile']`
        width: 50%;
    `}
`;

const Description = styled.span`
    flex: 2.5;
    margin-right: 36px;
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: ${pixelToRem(18)};
    line-height: 30px;

    ${mediaDevice['mobile']`
        display: block;
        font-weight: 400;
        font-size: ${pixelToRem(12)};
        line-height: 19px;
        margin-top: 26px;
    `}
`;

const LogoContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;



const AboutUsSection = () => {
    const windowSize = useWindowSize();

    return (
        <Container id={PAGE_BLOCKS.ABOUT_US}>
            <SectionTitle>About us</SectionTitle>
            <Content>
                {
                    isMobile(windowSize.width) ? (
                        <>
                            <Description>We provide a comprehensive B2B and B2C platform that automates daily business management for limousine companies and simplifies booking process for their clients. Our platform connects executive car and black car service companies with potential clients and each other across the globe using our latest technologies and dispatch software. Welcome to the Bookinglane family!</Description>
                            <Description>We owned and operated an executive car service company for over 7 years. During this time, we struggled to obtain new clients, connect to other local limousine companies, and grow our revenue as we were simply invisible on the market. Unfortunately, there was no existing software that provided robust business tools for a small limousine company like ours. The most prevalent business management solutions on the market were mainly built for big corporations that were merely not affordable to us and certainly did not provide solutions that we needed. We established a team of experts in transportation, logistics, software development, and technology to build Bookinglane as a longed-for solution to all challenges for transportation companies of various scale, independent operators and also their clients. </Description>
                        </>
                    ) : (
                        <>
                            <Description>We owned and operated an executive car service company for over 7 years. During this time, we struggled to obtain new clients, connect to other local limousine companies, and grow our revenue as we were simply invisible on the market. Unfortunately, there was no existing software that provided robust business tools for a small limousine company like ours. The most prevalent business management solutions on the market were mainly built for big corporations that were merely not affordable to us and certainly did not provide solutions that we needed. We established a team of experts in transportation, logistics, software development, and technology to build Bookinglane as a longed-for solution to all challenges for transportation companies of various scale, independent operators and also their clients. <br /><br />We provide a comprehensive B2B and B2C platform that automates daily business management for limousine companies and simplifies booking process for their clients. Our platform connects executive car and black car service companies with potential clients and each other across the globe using our latest technologies and dispatch software. Welcome to the Bookinglane family!</Description>
                        </>
                    )
                }
                <LogoContainer>
                    <LogoImage
                        loader={imageLoader}
                        src={logoImg}
                        alt="logo"
                    />
                </LogoContainer>
            </Content>
        </Container>
    );
};

export default AboutUsSection;