import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from 'components/layout';
import Head from 'next/head';
import PageTitle from 'components/common/PageTitle';
import Image from 'next/image';
import BookingSection from 'components/common/booking';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import { imageLoader } from 'helpers/image';
import cityImage from 'public/cities/new-york.png';
import sanFrancisco from 'public/cities/napa-valley.png';
import CitiesAndAirportsDescription from 'components/common/CitiesAndAirportsDescription';
import { isMobile } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import Link from 'next/link';
import colors from 'constants/colors';
import { CARS, LIMOS } from 'constants/routes';

const Container = styled.div`
    flex: 1;
`;

const Content = styled.div`
    display: flex;
    margin-top: 50px;

    ${mediaDevice['mobile']`
        flex-direction: column;
        margin-top: 70px;
    `}
`;

const MainImage = styled(Image)`
    margin-right: 30px;
    height: 340px;
    
    flex: 1;
    width: auto;

    ${mediaDevice['mobile']`
        margin-right: 0px;
        width: 100%;
        height: autopx;
    `}
`;

const Description = styled.span`
    display: block;
    flex: 1;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;

    ${mediaDevice['mobile']`
        margin-top: 20px;
        font-weight: 400;
        font-size: ${pixelToRem(12)};
        line-height: 19px;
    `}
`;


const StyledLink = styled(Link)`
    color: ${colors.blue};
    font-weight: 500;
`;


const leftDescriptionText = `
    Napa Valley, also known as Wine Country, is a popular destination for tourists and business travelers alike. The region is renowned for its picturesque landscapes, world-class wineries, and delicious cuisine. To make the most of your visit to Napa Valley, choosing an executive <a style="color: ${colors.blue};font-weight: 500;" href="/${CARS.NAPA_VALLEY}">car service</a> is the best option. With Bookinglane’s tech, booking process becomes seamless. 

    Convenience: An executive car service can pick you up at your location and take you directly to your destination, saving you the hassle of navigating unfamiliar roads or finding parking. With a private car service, you can enjoy the scenery and take in the sights of the beautiful Napa Valley without the stress of driving.

    Safety: Executive car services are typically operated by professional drivers who are trained to provide a safe and comfortable ride. The drivers are knowledgeable of the area and familiar with the traffic patterns and can take you through the best routes to reach your destination on time.

    Comfort: Executive car services often provide luxury vehicles with amenities such as comfortable seating, air conditioning, and entertainment systems. This can help you to relax and enjoy the ride as you take in the beautiful landscapes of Napa Valley.
`;

const rightDescriptionText = `
    Reliability: Executive car services are often more reliable than other forms of transportation, as they operate on a schedule and are less likely to be affected by traffic or other delays. This ensures you reach your destination on time, so you can make the most of your visit to Napa Valley.

    Impress: With an executive car service, you can make a great impression on your business clients, partners, or investors. This shows that you value their time and want to make sure they have a comfortable and enjoyable visit to Napa Valley.

    Time efficiency: Avoid the stress and time of navigating the area, an executive car service can take you to your destination in a timely manner, so you can spend more time enjoying the wineries, restaurants, and other attractions of Napa Valley.

    In conclusion, choosing an executive car service in Napa Valley is the best way to make the most of your visit to Wine Country. It offers convenience, safety, comfort, reliability, time efficiency, and it can impress your guests or clients. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks.
`;

const SanFrancisco = () => {
    const windowSize = useWindowSize();

    function renderDescriptionTitle () {
        return (
            <PageTitle.h3>Why choosing executive car {isMobile(windowSize.width) !== true && <br />} service in Napa Valley?</PageTitle.h3>
        );
    }

    return (
        <Layout>
			<>
			<Head>
                <title>Executive Car & Chauffeur Service in Napa Valley | Bookinglane </title>
                <meta
                    name="description"
                    content="Experience the beauty of Napa Valley with Bookinglane's luxury car service. From sedan rides to special tours, we offer the perfect transportation solution for your needs. Book now!"
                    key="desc"
                />
            </Head>
			
            <Container>
                <PageTitle.h1>Book executive car & chauffeur service in New York</PageTitle.h1>
                <BookingSection />
                <PageTitle.h2 style={{ marginTop: isMobile(windowSize.width) ? "45px" : "150px" }}>Discover Napa Valley with Bookinglane’s { !isMobile(windowSize.width) ? <br/> : null}executive car and chauffeur service</PageTitle.h2>

                <Content>
                    <MainImage
                        src={sanFrancisco}
                        alt="Bookinglane is your go-to source for executive car & chauffeur service in Napa Valley!"
                        loader={imageLoader}
                    />
                    <Description>
                        Napa Valley is the perfect destination for those looking to explore the beauty of California's wine country. From luxury sedan rides to special tours, Bookinglane offers an executive car & chauffeur service that can help make your trip even more memorable. Whether you're looking for a romantic getaway or a corporate retreat, Bookinglane's fleet of luxury sedans, <StyledLink href={LIMOS.NAPA_VALLEY}>limousines</StyledLink> and mini buses can provide you with the perfect transportation solution for your needs. Our experienced and knowledgeable chauffeurs will ensure that you have a safe and comfortable journey while taking in all the sights of Napa Valley. Bookinglane is your go-to source for executive car & chauffeur service in Napa Valley!
                    </Description>
                </Content>
                <CitiesAndAirportsDescription
                    image={cityImage}
					imgAlt="Why choosing executive car service in Napa Valley?"
                    leftDescriptionText={leftDescriptionText}
                    rightDescriptionText={rightDescriptionText}
                    renderTitle={renderDescriptionTitle}
                />
                <ContactUs />
                <Partners />
            </Container>
			</>
        </Layout>
    );
};

export default SanFrancisco;