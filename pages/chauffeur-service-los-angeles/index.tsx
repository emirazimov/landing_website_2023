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
import cityImage from 'public/cities/los-angeles-city.png';
import sanFrancisco from 'public/cities/los-angeles.png';
import { AIRPORTS, CARS, LIMOS } from 'constants/routes';
import colors from 'constants/colors';
import { isMobile } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';

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
    height: 400px;
    
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
	With its diverse population and mix of cultures, Los Angeles is home to some of the most iconic landmarks in the world. Whether you are looking for a relaxing vacation or an exciting nightlife, there is something for everyone in Los Angeles. With its rich history and vibrant culture, Los Angeles is sure to be a memorable experience.

	Choosing an executive <a style="color: ${colors.blue};font-weight: 500;" href="/${CARS.LOS_ANGELES}" rel="nofollow">car service</a>  in Los Angeles is a great choice for several reasons:

	Convenience: An executive car service eliminates the need to navigate Los Angeles' often-congested streets and traffic, saving you time and stress.

	Professionalism: Executive car services employ professional drivers who are knowledgeable of the city and its traffic patterns, and they provide a high level of customer service.

	Safety: Executive car services typically use late-model, well-maintained vehicles that are equipped with the latest safety features and are regularly serviced to ensure your safety.

	Comfort: Executive cars are typically luxury vehicles that are comfortable, spacious, and equipped with amenities such as Wi-Fi and charging ports to make your journey more enjoyable.
`;

const rightDescriptionText = `
	Reliability: Executive car services are known for their reliability and punctuality, ensuring that you will arrive at your destination on time and in comfort.

	Privacy: Executive car services offer privacy and discretion, making it an ideal choice for business travelers and VIPs who value their privacy.

	Flexibility: Executive car services offer a variety of vehicles, from luxury sedans to SUVs, <a style="color: ${colors.blue};font-weight: 500;" href="/${LIMOS.LOS_ANGELES}">limousines</a>, and vans, to meet your transportation needs.

	Cost-effective: Executive car services can often be more cost-effective than renting a car, especially for longer trips or for groups of people.

	In conclusion, choosing an executive car service in Los Angeles can be an excellent choice for anyone looking for a convenient, safe, comfortable, and reliable transportation option. Whether you're a business traveler, a VIP, or just looking for a luxury transportation experience, an executive car service can provide the level of service and comfort that you need. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks. 
`;

const SanFrancisco = () => {
	const windowSize = useWindowSize();

	function renderDescriptionTitle() {
		return (
			<PageTitle.h3>Why choosing executive car {isMobile(windowSize.width) !== true && <br />} service in Los Angeles?</PageTitle.h3>
		);
	}

	return (
		<Layout>
			<>
				<Head>
					<title>Book Executive Car & Chauffeur Service in Los Angeles | Bookinglane</title>
					<meta
						name="description"
						content="Enjoy luxury rides with professional chauffeurs in Los Angeles. Book now and get safe and reliable transportation."
						key="desc"
					/>
				</Head>
				<Container>
					<PageTitle.h1>Book executive car & chauffeur service in Los Angeles</PageTitle.h1>
					<BookingSection />
					<PageTitle.h2 style={{ marginTop: isMobile(windowSize.width) ? "45px" : "150px" }}>Experience luxury travel with{ !isMobile(windowSize.width) ? <br/> : null} Bookinglane’s executive car service</PageTitle.h2>
					<Content>
						<MainImage
							src={sanFrancisco}
							alt="Bookinglane is a premier executive car & chauffeur service in Los Angeles."
							loader={imageLoader}
						/>
						<Description>
							Bookinglane is a premier executive car & chauffeur service in Los Angeles. We provide luxury sedan services for <StyledLink href={AIRPORTS.LOS_ANGELES}>airport transfers</StyledLink>, special tours, and any other transportation needs. Our fleet of vehicles includes the latest models of luxury sedans that are professionally maintained and equipped with the latest amenities to ensure a safe and comfortable ride. Whether you need to get to the airport on time or have a special tour planned, our experienced chauffeurs will get you there safely and in style. With Bookinglane’s executive <StyledLink href={CARS.LOS_ANGELES}>car service</StyledLink>, you can rest assured that your journey will be smooth and enjoyable.
						</Description>
					</Content>
					<CitiesAndAirportsDescription
						leftDescriptionText={leftDescriptionText}
						rightDescriptionText={rightDescriptionText}
						image={cityImage}
						imgAlt="Why choosing executive car service in Los Angeles?"
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