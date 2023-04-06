import React from 'react';
import styled from 'styled-components';
import Layout from 'components/layout';
import Head from 'next/head';
import PageTitle from 'components/common/PageTitle';
import BookingSection from 'components/common/booking';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import airportImage from 'public/aiports/los-angeles.png';
import CitiesAndAirportsDescription from 'components/common/CitiesAndAirportsDescription';

const Container = styled.div`
    flex: 1;
`;

const leftDescriptionText = `
	Los Angeles International Airport (LAX) is the primary airport serving the Los Angeles area, and one of the busiest airports in the world. It is located approximately 18 miles southwest of downtown Los Angeles. LAX serves as a hub for American Airlines, Delta Air Lines, and United Airlines, and also serves as a focus city for Alaska Airlines, Southwest Airlines and Spirit Airlines. The airport has nine terminals, each with a variety of shops, restaurants, and services available for passengers. LAX offers a wide range of transportation options, including rental cars, taxis, shuttles, and premier car service. 

	Choosing an executive car service in Los Angeles for airport transfer can be beneficial for a number of reasons. One of the main advantages is that it offers a high level of comfort and luxury for travelers, with features such as leather seats, air conditioning, and plenty of legroom. Additionally, executive car services often have a fleet of newer, well-maintained vehicles, which can provide a smoother and more reliable ride. 
`;

const rightDescriptionText = `
	Moreover, the driver of an executive car service is often experienced and professionally trained, which can help ensure a safe and efficient transfer. Furthermore, it can also be more convenient as executive car service companies often offer a meet and greet service at the airport, as well as flight tracking, ensuring that the driver is on time to pick you up.
	
	An executive car service can also provide a more cost-effective option for those travelling on business, as it eliminates the need to rent a car or pay for parking. It also can be a great option for those who want to avoid the hassle and expense of renting a car or the uncertainty of hailing a taxi or rideshare service. With an executive car service, you can have peace of mind knowing that your transportation is taken care of ahead of time. Additionally, Los Angeles is a large city with heavy traffic, using an executive car service can save you the stress and frustration of navigating the city's streets and highways. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks.
`;

const SanFrancisco = () => {
	function renderDescriptionTitle() {
		return null;
	}

	return (
		<Layout>
			<>
				<Head>
					<title>Professional Airport Transfers in Los Angeles - Bookinglane</title>

					<meta
						name="description"
						content="Enjoy stress-free airport transfers in Los Angeles with Bookinglane. Our professional chauffeurs and luxury vehicles ensure a comfortable and timely ride. Book now!"
						key="desc"
					/>
				</Head>
				<Container>
					<PageTitle.h1>Airport transfer in Los Angeles</PageTitle.h1>
					<BookingSection />
					<CitiesAndAirportsDescription
						leftDescriptionText={leftDescriptionText}
						rightDescriptionText={rightDescriptionText}
						imgAlt="Airport transfer in Los Angeles"
						image={airportImage}
						//@ts-ignore
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