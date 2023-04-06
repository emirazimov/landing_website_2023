import React from 'react';
import styled from 'styled-components';
import Layout from 'components/layout';
import PageTitle from 'components/common/PageTitle';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import BookingSection from 'components/common/booking';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import { imageLoader } from 'helpers/image';
import cityImage from 'public/cities/san-francisco-city.png';
import sanFrancisco from 'public/cities/san-francisco.png';
import { AIRPORTS, CARS, LIMOS } from 'constants/routes';
import colors from 'constants/colors';
import { isMobile } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import CitiesAndAirportsDescription from 'components/common/CitiesAndAirportsDescription';

const Container = styled.div`
    flex: 1;
`;

const Content = styled.div`
    display: flex;
    margin-top: 130px;

    ${mediaDevice['mobile']`
        flex-direction: column;
        margin-top: 70px;
    `}
`;

const MainImage = styled(Image)`
    margin-right: 30px;
    height: 810px;
    
    flex: 1;
    width: auto;

    ${mediaDevice['mobile']`
        margin-right: 0px;
        width: 100%;
        height: autopx;
    `}
`;

const Description = styled.span`
	display: flex;
	flex-direction: column;
	gap: 50px;
    flex: 1;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

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

const StyledImage = styled(Image)`
    width: 100%;
    height: auto;
    margin-top: 45px;

    ${mediaDevice['mobile']`
        margin-top: 35px;
    `}
`;

const DescriptionBlock = styled.div`
    margin-top: 50px;
    display: flex;
    gap: 30px;

    ${mediaDevice['mobile']`
        margin-top: 15px;
        flex-direction: column;
        gap: 0;
    `}
`;

const CustomH3 = styled.h3`
	font-size: 18px;
	margin-block-start: unset;
	margin-block-end: unset;
	margin-bottom: 20px;
`

const leftDescriptionTextTop = `
	Whether you're interested in history, art, or outdoor activities, San Francisco has something to offer for everyone. Take some time to explore the city and discover all that it has to offer. When it comes to traveling in style and comfort, nothing beats the experience of hiring a professional chauffeur. In San Francisco, you'll find a wide range of professional chauffeur services that offer industry-leading quality, reliability, discretion, and more.
`;

const leftDescriptionTextBottom = `
	One of the key advantages of hiring a professional chauffeur is the level of quality and reliability they provide. These expert drivers are trained to the highest standards and have a wealth of experience in navigating the city's streets and traffic. They know the best routes to take to avoid congestion and delays, ensuring that you arrive at your destination on time and in comfort.
`

const rightDescriptionTextTop = `
	In addition to their driving skills, professional chauffeurs are also known for their discretion and professionalism. They understand the importance of maintaining your privacy and will always go the extra mile to make sure you feel safe and comfortable during your journey. Whether you're a business traveler or a VIP, you can trust that your personal information and belongings will be kept confidential and secure at all times.
`;

const rightDescriptionTextBottom = `
	Another benefit of hiring a professional chauffeur is the wide range of vehicles they have available. From luxury sedans and SUVs to <a style="color: ${colors.blue};font-weight: 500;" href="/${LIMOS.SAN_FRANSISCO}" rel="nofollow">limousines</a> and vans, you'll be able to choose the perfect vehicle to suit your needs and preferences. Whether you're looking for a sleek, stylish ride or a more spacious and comfortable option, you'll find it with a professional chauffeur. With Bookinglane, you can find and book an executive <a style="color: ${colors.blue};font-weight: 500;" href="/${CARS.SAN_FRANSISCO}" rel="nofollow">car service</a> in the area in a matter of a few clicks.
`
 
const SanFrancisco = () => {
	const windowSize = useWindowSize();

	function renderDescriptionTitle() {
		return (
			<PageTitle.h2>Why choosing executive car {isMobile(windowSize.width) !== true && <br />} service in San Francisco?</PageTitle.h2>
		);
	}

	return (
		<Layout>
			<>
				<Head>
					<title>Book Executive Car & Chauffeur Service in San Francisco - Bookinglane</title>

					<meta
						name="description"
						content="Enjoy reliable and professional executive car and chauffeur services in San Francisco with Bookinglane. Book your ride today and travel in comfort and style."
						key="desc"
					/>
				</Head>
				<Container>
					<PageTitle.h1>Book executive car & chauffeur service in San Francisco</PageTitle.h1>
					<BookingSection />
					<PageTitle.h3 style={{ marginTop: isMobile(windowSize.width) ? "45px" : "150px" }}>Corporate car service in San Francisco</PageTitle.h3>
					<Content style={{ marginTop: "45px" }}>
						<MainImage
							src={sanFrancisco}
							alt="As a corporate car service provider in San Francisco, Bookinglane understands the importance professional transportation solution."
							loader={imageLoader}
						/>
						<Description style={{ display: "block" }}>As a corporate <StyledLink href={CARS.SAN_FRANSISCO}>car service</StyledLink> provider in San Francisco, Bookinglane understands the importance of having a reliable and professional transportation solution. We have the experience, expertise, and knowledge to ensure our clients receive the highest level of service for their executive car service needs. Our fleet of vehicles is always in excellent condition and our drivers are highly trained and knowledgeable. Our commitment to customer service and satisfaction is unmatched. We take great pride in our service and strive to provide an experience that is second to none.
							<br />
							<br />
							We understand that your time is valuable, and we work hard to make sure your travel needs are taken care of in a timely and efficient manner. We provide a range of services including corporate accounts, <StyledLink href={AIRPORTS.SAN_FRANSISCO}>airport transfers</StyledLink>, wedding <StyledLink href={LIMOS.SAN_FRANSISCO}>limousines</StyledLink>, long distance road trips, and more. We also offer competitive rates, so you know you are getting the best value for your money. When you book with us, you can rest assured that you are getting the highest level of service and reliability.
							<br />
							<br />
							At Bookinglane, we understand that executive car service is about more than just getting from point A to point B. We strive to provide our clients with a luxurious, comfortable, and enjoyable experience every single time. From our courteous and professional drivers to the well-maintained vehicles, we ensure that your experience is the best it can possibly be.
							<br />
							<br />
							For all your executive car service needs in San Francisco, look no further than Bookinglane.
						</Description>
					</Content>
					<Description>
						<Container>
							{renderDescriptionTitle()}
							<StyledImage
								src={cityImage}
								alt="Why choosing executive car service in San Francisco?"
								loader={imageLoader}
							/>
							<DescriptionBlock>
								<Description>
									<div>
										<CustomH3>Explore the city and discover all that it has to offer</CustomH3>
										<p dangerouslySetInnerHTML={{__html: leftDescriptionTextTop}} />
									</div>

									<div>
										<CustomH3>Experience the highest level of quality and reliability with a professional chauffeur</CustomH3>
										<p dangerouslySetInnerHTML={{__html: leftDescriptionTextBottom}} />
									</div>
								</Description>
								<Description>
									<div>
										<CustomH3>Discretion and professionalism</CustomH3>
										<p dangerouslySetInnerHTML={{__html: rightDescriptionTextTop}} />
									</div>
									
									<div>
										<CustomH3>Wide range of vehicles</CustomH3>
										<p dangerouslySetInnerHTML={{__html: rightDescriptionTextTop}} />
									</div>
								</Description>
							</DescriptionBlock>
						</Container>
					</Description>
					<ContactUs />
					<Partners />
				</Container>
			</>
		</Layout>
	);
};

export default SanFrancisco;