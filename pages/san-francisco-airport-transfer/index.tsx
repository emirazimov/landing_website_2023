import React from 'react';
import styled from 'styled-components';
import Layout from 'components/layout';
import Head from 'next/head';
import PageTitle from 'components/common/PageTitle';
import BookingSection from 'components/common/booking';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import airportImage from 'public/aiports/san-francisco.png';
import CitiesAndAirportsDescription from 'components/common/CitiesAndAirportsDescription';

const Container = styled.div`
    flex: 1;
`;

const leftDescriptionText = `
	San Francisco International Airport (SFO) is a major international airport located in San Francisco, California. It is the second busiest airport in California and the seventh busiest in the United States. SFO serves as a hub for United Airlines and Alaska Airlines, and also serves as a focus city for American Airlines, Delta Air Lines and Southwest Airlines.
	The airport has four terminals: Terminal 1, Terminal 2, Terminal 3 and International Terminal. Each terminal has a variety of shops, restaurants and services available for passengers. SFO also offers a wide range of transportation options, including rental cars, taxis, shuttles, and premier car service.
`;

const rightDescriptionText = "Choosing an executive car service in San Francisco for airport transfer can be beneficial for a number of reasons. One of the main advantages is that it offers a high level of comfort and luxury for travelers, with features such as leather seats, air conditioning, and plenty of legroom. Additionally, executive car services often have a fleet of newer, well-maintained vehicles, which can provide a smoother and more reliable ride. Moreover, the driver of an executive car service is often experienced and professionally trained, which can help ensure a safe and efficient transfer. Furthermore, it can also be more convenient as executive car service companies often offer a meet and greet service at the airport, as well as flight tracking, ensuring that the driver is on time to pick you up. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks. ";

const SanFrancisco = () => {
	function renderDescriptionTitle() {
		return null;
	}

	return (
		<Layout>
			<>
				<Head>
					<title>San Francisco Airport Transfers - Book Now | Bookinglane</title>

					<meta
						name="description"
						content="Enjoy a smooth and hassle-free ride to and from San Francisco airport with Bookinglane's reliable and convenient executive car and chauffeur service. Book now and experience the difference!"
						key="desc"
					/>
				</Head>

				<Container>
					<PageTitle.h1>Airport transfer in San Francisco</PageTitle.h1>
					<BookingSection />
					<CitiesAndAirportsDescription
						leftDescriptionText={leftDescriptionText}
						rightDescriptionText={rightDescriptionText}
						imgAlt="Airport transfer in San Francisco"
						image={airportImage}
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