import React from 'react';
import styled from 'styled-components';
import Layout from 'components/layout';

import PageTitle from 'components/common/PageTitle';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import CitiesAndAirportsDescription from 'components/common/CitiesAndAirportsDescription';
import BookingSection from 'components/common/booking';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import { imageLoader } from 'helpers/image';
import cityImage from 'public/cities/san-diego-city.png';
import sanFrancisco from 'public/cities/san-diego.png';
import { AIRPORTS, CARS, LIMOS } from 'constants/routes';
import colors from 'constants/colors';
import { isMobile } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';

const Container = styled.div`
    flex: 1;
`;

const Content = styled.div`
    display: flex;
    margin-top: 80px;

    ${mediaDevice['mobile']`
        flex-direction: column;
        margin-top: 70px;
    `}
`;

const MainImage = styled(Image)`
    margin-right: 30px;
    height: 260px;
    
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
	Are you planning a trip to San Diego and looking for a luxurious and convenient transportation option with a professional chauffeur? Look no further than an executive <a style="color: ${colors.blue};font-weight: 500;" href="/${CARS.SAN_DIEGO}" rel="nofollow">car service</a> with Bookinglane. Here are just a few reasons why choosing an executive car service in San Diego is the way to go:

	Convenience: An executive car service eliminates the need to navigate San Diego's busy streets and traffic, saving you time and stress.

	Professionalism: Executive car services employ professional drivers who are knowledgeable of the city and its traffic patterns, and provide a high level of customer service.

	Safety: Executive car services typically use late-model, well-maintained vehicles that are equipped with the latest safety features and are regularly serviced to ensure your safety.

	Comfort: Executive cars are typically luxury vehicles that are comfortable, spacious, and equipped with amenities such as Wi-Fi and charging ports to make your journey more enjoyable.

	Reliability: Executive car services are known for their reliability and punctuality, ensuring that you will arrive at your destination on time and in comfort.
`;

const rightDescriptionText = `
	Privacy: Executive car services offer privacy and discretion, making it an ideal choice for business travelers and VIPs who value their privacy.

	Flexibility: Executive car services offer a variety of vehicles, from luxury sedans to SUVs, <a style="color: ${colors.blue};font-weight: 500;" href="/${LIMOS.SAN_DIEGO}" rel="nofollow">limousines</a>, and vans, to meet your transportation needs.

	Cost-effective: Executive car services can often be more cost-effective than renting a car, especially for longer trips or for groups of people.

	San Diego Attractions: San Diego offers a lot of attractions such as the San Diego Zoo, Balboa Park, SeaWorld, USS Midway Museum, and much more, and an executive car service will make sure you reach these destinations on time and in style.

	When it comes to transportation in San Diego, choosing an executive car service is the perfect way to ensure a comfortable, safe, and reliable journey. Whether you're a business traveler or a VIP, an executive. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks.
`;

const SanFrancisco = () => {
	const windowSize = useWindowSize();

	function renderDescriptionTitle() {
		return (
			<PageTitle.h3>Why choosing executive car {isMobile(windowSize.width) !== true && <br />} service in San Diego?</PageTitle.h3>
		);
	}

	return (
		<Layout>
			<>
				<Head>
					<title>Book Executive Car & Chauffeur Service in San Diego | Bookinglane</title>
					<meta
						name="description"
						content="Looking for the best executive car service in San Diego? Bookinglane offers luxurious and reliable black car transportation with experienced drivers, ensuring you arrive on time and in style. Book now."
						key="desc"
					/>
				</Head>
				<Container>
					<PageTitle.h1>Book executive car & chauffeur service in San Diego</PageTitle.h1>
					<BookingSection />
					<PageTitle.h2 style={{ marginTop: isMobile(windowSize.width) ? "45px" : "150px" }}>Luxurious sedans and limo { !isMobile(windowSize.width) ? <br/> : null}transportation in San Diego</PageTitle.h2>
					<Content>
						<MainImage
							src={sanFrancisco}
							alt="At Bookinglane, we offer the best in executive car service in San Diego"
							loader={imageLoader}
						/>
						<Description>
							At Bookinglane, we offer the best in executive <StyledLink href={CARS.SAN_DIEGO}>car service</StyledLink> in San Diego. Our black car service is sure to exceed your expectations, with luxurious sedans and <StyledLink href={LIMOS.SAN_DIEGO}>limo transportation</StyledLink> that can take you anywhere you need to go. Our experienced drivers ensure that you’ll arrive to your destination on time, in style, and in the utmost comfort. Whether you’re looking for a limo to <StyledLink href={AIRPORTS.SAN_DIEGO}>pick you up from the airport</StyledLink> or a luxury car to take you to a special event, we’re here to provide the best service in San Diego. Book now and experience the Bookinglane difference.
						</Description>
					</Content>
					<CitiesAndAirportsDescription
						leftDescriptionText={leftDescriptionText}
						rightDescriptionText={rightDescriptionText}
						image={cityImage}
						imgAlt="Why choosing executive car service in San Diego?"
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