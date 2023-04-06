import React from 'react';
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
import cityImage from 'public/cities/monterey-city.png';
import monterey from 'public/cities/monterey.png';
import CitiesAndAirportsDescription from 'components/common/CitiesAndAirportsDescription';
import { isMobile } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import { CARS, LIMOS } from 'constants/routes';
import colors from 'constants/colors';

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
    height: 270px;
    
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
	white-space: pre-wrap;

    ${mediaDevice['mobile']`
        margin-top: 20px;
        font-weight: 400;
        font-size: ${pixelToRem(12)};
        line-height: 19px;
    `}
`;

const leftDescriptionText = `
	Monterey, California is a beautiful and bustling city, offering a wide range of activities and attractions for visitors. Whether you're in town for business or leisure, choosing Bookinglane's executive <a style="color: ${colors.blue};font-weight: 500;" href="/${CARS.MONTEREY}">car service</a> is the smart and convenient way to get around.

	At Bookinglane, we understand that you need a reliable and safe transportation solution, and that's exactly what our <a style="color: ${colors.blue};font-weight: 500;" href="/${LIMOS.MONTEREY}">limo service</a> provides. With a professional chauffeur at the wheel, you can sit back, relax, and enjoy the scenic drive while avoiding the stress of navigating unfamiliar roads. Our chauffeurs are experienced and knowledgeable, ensuring a smooth and comfortable journey to your destination.

	For travelers who are looking to explore the Monterey area, our special tours package is the perfect solution. With our executive car service, you can visit Pebble Beach, the world-famous golf course, or take a stroll through the charming town of Carmel.
`;	

const rightDescriptionText = `
	We'll customize your itinerary to fit your preferences, so you can make the most of your time in Monterey.

	For those flying into San Francisco International Airport, our airport transfer service is the most convenient way to get to Monterey. Our chauffeur will meet you at the airport, assist with your luggage, and escort you to your luxury sedan, where you can sit back, relax, and enjoy the scenic drive to your final destination.

	In conclusion, Bookinglane's executive car service is the ideal choice for travelers who want a luxurious and convenient transportation experience in Monterey. Whether you're in town for a business trip, a special event, or a leisurely getaway, our limo service provides a safe, comfortable, and memorable journey. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks.
`;

const Monterey = () => {
	const windowSize = useWindowSize();

	function renderDescriptionTitle() {
		return (
			<PageTitle.h2>Why choosing executive car {isMobile(windowSize.width) !== true && <br />} service in Monterey, CA?</PageTitle.h2>
		);
	}

	return (
		<Layout>
			<>
				<Head>
					<title>Executive Car Service in Monterey, CA | Book Your Ride Now - Bookinglane</title>
					<meta
						name="description"
						content="Book executive car service in Monterey, CA with Bookinglane. Enjoy a safe and convenient airport transfer to or from Pebble Beach, Carmel, and more. Customize your itinerary and travel in style."
						key="desc"
					/>
				</Head>
				<Container>
					<PageTitle.h1>Book executive car & chauffeur service in Monterey</PageTitle.h1>
					<BookingSection />

					<PageTitle.h2 style={{ marginTop: isMobile(windowSize.width) ? "45px" : "150px" }}>Explore Monterey in Style with Bookinglane</PageTitle.h2>
					<Content>
						<MainImage
							src={monterey}
							alt="Discover the beauty of Monterey with Bookinglane."
							loader={imageLoader}
						/>
						<Description>
							{`At Bookinglane, we offer more than just airport transfers and inner-city rides. We also specialize in special tours, allowing you to experience Monterey's breathtaking beauty in a unique and personalized way. Whether you want to explore the city's famous wine country, or simply see the sights, our experienced drivers will help you create an unforgettable experience. \n\n Discover the beauty of Monterey with Bookinglane. Book your ride today and see the difference for yourself!`}
						</Description>
					</Content>
					<CitiesAndAirportsDescription
						image={cityImage}
						imgAlt="Why choosing executive car service in Monterey, CA?"
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

export default Monterey;