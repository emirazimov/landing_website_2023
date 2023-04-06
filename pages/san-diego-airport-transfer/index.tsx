import React from 'react';
import styled from 'styled-components';
import Layout from 'components/layout';
import Head from 'next/head';
import PageTitle from 'components/common/PageTitle';
import BookingSection from 'components/common/booking';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import airportImage from 'public/aiports/san-diego.png';
import CitiesAndAirportsDescription from 'components/common/CitiesAndAirportsDescription';

const Container = styled.div`
    flex: 1;
`;

const leftDescriptionText = `
	San Diego International Airport, also known as Lindbergh Field, is the primary airport serving San Diego, California and the surrounding region. It is the busiest single-runway commercial airport in the United States and the second busiest in California after Los Angeles International Airport. The airport has two terminals: Terminal 1 and Terminal 2. Terminal 1 serves all domestic airlines, while Terminal 2 serves all international airlines. Both terminals have a variety of shops, restaurants and services available for passengers. The airport offers a wide range of transportation options, including rental cars, taxis, shuttles, and premier car service.
	
	Choosing an executive car service in San Diego for airport transfer can be beneficial for a number of reasons. One of the main advantages is that it offers a high level of comfort and luxury for travelers, with features such as leather seats, air conditioning, and plenty of legroom. Additionally, executive car services often have a fleet of newer, well-maintained vehicles, which can provide a smoother and more reliable ride.
`;

const rightDescriptionText = `
	Moreover, the driver of an executive car service is often experienced and professionally trained, which can help ensure a safe and efficient transfer. Furthermore, it can also be more convenient as executive car service companies often offer a meet and greet service at the airport, as well as flight tracking, ensuring that the driver is on time to pick you up.
	
	An executive car service is also a great option for those who want to avoid the hassle and expense of renting a car or the uncertainty of hailing a taxi or ride-share service. With an executive car service, you can have peace of mind knowing that your transportation is taken care of ahead of time. Moreover, if you are traveling for business, an executive car service can provide a more professional image and also it can be more cost-effective than renting a car. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks.
`;

const SanFrancisco = () => {
	function renderDescriptionTitle() {
		return null;
	}

	return (
		<Layout>
			<>
				<Head>
					<title>Reliable Airport Transfers in San Diego - Bookinglane </title>

					<meta
						name="description"
						content="With Bookinglane, enjoy safe and timely airport transfers in San Diego with our professional chauffeurs and black car service. Book your ride today!"
						key="desc"
					/>
				</Head>
				<Container>
					<PageTitle.h1>Airport transfer in San Diego</PageTitle.h1>
					<BookingSection />
					<CitiesAndAirportsDescription
						leftDescriptionText={leftDescriptionText}
						rightDescriptionText={rightDescriptionText}
						image={airportImage}
						imgAlt="Airport transfer in San Diego"
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