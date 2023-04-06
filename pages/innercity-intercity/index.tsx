import Layout from 'components/layout';
import styled from 'styled-components';
import Head from 'next/head';
import BookingSection from 'components/common/booking';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import interCity from 'public/service-pages/inter-city.png';
import interCityMobile from 'public/service-pages-mobile/inter-city.png';
import { isMobile } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import ServiceInfo from 'components/common/ServiceInfo';
import PageTitle from 'components/common/PageTitle';
import CitiesAndAirportsDescription from 'components/common/CitiesAndAirportsDescription';
import descritionImage from 'public/service-pages/interCityDescriptionPhoto.png';

const Container = styled.div`
	flex: 1;
`;

const leftDescriptionText = `
	At Bookinglane, our goal is to provide valuable information about our services, and share the latest news and trends in the transportation industry.

	We specialize in providing high-end, luxury transportation solutions for inner-city and inter-city rides. Whether you're traveling for business or leisure, our experienced chauffeurs will ensure that you arrive at your destination on time, in comfort, and in style.

	Our fleet of executive cars includes a range of high-end vehicles, including luxury limousines. Our limos are equipped with the latest technology, including Wi-Fi and entertainment systems, to ensure that you have a smooth and enjoyable ride. Our chauffeurs are professional, courteous, and knowledgeable about the best routes to take to get you to your destination quickly and efficiently.

	When it comes to choosing a chauffeur service, safety and reliability are crucial factors. Our team of experts has a wealth of experience in the transportation industry, and we have a proven track record of providing safe, comfortable, and punctual rides to our clients.
`;

const rightDescriptionText = `
	Whether you're traveling for work or for pleasure, you can trust us to get you to your destination on time, every time.

	In addition to our executive car and chauffeur services, we also offer a range of other transportation solutions, including airport transfers, corporate transportation, and special events transportation. Our experienced team will work with you to understand your specific needs and tailor our services to meet your requirements.

	In conclusion, if you're looking for a reliable, high-end transportation solution, look no further than our executive car and chauffeur service. Whether you're in need of a luxurious limo for an inner-city ride or an experienced chauffeur for an inter-city trip, we're here to help. Contact us today to learn more about our services and to book your next ride. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks. 
`;

function InnerCityInterCity() {
	const windowSize = useWindowSize();
	const image = isMobile(windowSize.width) ? interCityMobile : interCity;

	function renderDescriptionTitle() {
		return (
			<PageTitle.h1 style={{ paddingTop: 20 }}>Why choose Bookinglane?</PageTitle.h1>
		);
	}

	return (
		<Layout>
			<>
				<Head>
					<title>Executive Car & Chauffeur Service for City & Beyond | Bookinglane</title>
					<meta
						name="description"
						content="Book executive car and chauffeur service for innercity and intercity rides with Bookinglane. Enjoy reliable and luxurious transportation in any city."
						key="desc"
					/>
				</Head>
				<Container>
					<PageTitle.h1>Book executive car & chauffeur service for innercity and intercity rides</PageTitle.h1>
					<BookingSection />
					<ServiceInfo
						image={image}
						text="Have you ever been in need of executive car or limousine service to travel within or between cities? With the executive level of chauffeur service provided by our transportation solution, your instant solution has arrived! We offer a professional and discrete way to get you where you need to be quickly and comfortably. Enjoy a carefree ride without having to worry about traffic, parking and figuring out directions - whether for business meetings or for private trips. Rest assured that with us, your comfort is our priority."
					/>
					<CitiesAndAirportsDescription
						leftDescriptionText={leftDescriptionText}
						rightDescriptionText={rightDescriptionText}
						image={descritionImage}
						renderTitle={renderDescriptionTitle}
					/>
					<ContactUs />
					<Partners />
				</Container>
			</>
		</Layout>
	);
}

export default InnerCityInterCity;
