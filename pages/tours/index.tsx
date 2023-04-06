import Layout from 'components/layout';
import styled from 'styled-components';
import tours from 'public/service-pages/tours.png';
import toursMobile from 'public/service-pages-mobile/tours.png';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import ServiceInfo from 'components/common/ServiceInfo';
import PageTitle from 'components/common/PageTitle';
import CitiesAndAirportsDescription from 'components/common/CitiesAndAirportsDescription';
import descritionImage from 'public/service-pages/tourDescriptionPhoto.png';

const Container = styled.div`
	flex: 1;
`;

const leftDescriptionText = `
	Discover the ultimate travel experience with our chauffeur service at Bookinglane. Our team of professional and experienced chauffeurs are dedicated to providing the highest quality transportation services to meet all of your needs. Whether you're looking for a luxurious limo service or a sophisticated chauffeur service, we have you covered.

	With a fleet of the latest and greatest limousines, we are proud to offer an unrivaled limo service that is unmatched in terms of comfort, style, and luxury. Our chauffeurs are knowledgeable, friendly, and always ready to ensure that you have a smooth and seamless ride.

	When you travel with us, you can sit back, relax, and enjoy the journey. Our chauffeur service provides you with a worry-free travel experience, freeing you up to focus on your work or simply enjoy the scenery.
`

const rightDescriptionText = `
	Our goal is to provide you with a stress-free and comfortable ride, no matter where your travels may take you.

	We understand that every client has unique needs and requirements, which is why we offer a fully customizable service to meet your specific needs. Whether you're traveling for business or for pleasure, we will work with you to create a travel itinerary that is tailored to your schedule and preferences.

	So why wait? Experience the ultimate in travel comfort and luxury with our chauffeur service. Book your ride today and let us take care of the rest. Contact us for more information about our limo service and chauffeur services and let us help you discover the ultimate travel experience. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks. 
`

function Tours() {
	const windowSize = useWindowSize();
	const image = isMobile(windowSize.width) ? toursMobile : tours;

	function renderDescriptionTitle() {
		return (
			<PageTitle.h1 style={{ paddingTop: 20 }}>Planning a special tour? Bookinglane is here for you.</PageTitle.h1>
		);
	}

	return (
		<Layout>
			<>
				<Head>
					<title>Wine Tour & Event Chauffeur Service | Bookinglane </title>

					<meta
						name="description"
						content="Experience the luxury of a traditional chauffeur for your wine tour, wedding or special event. Book your ride with Bookinglane today."
						key="desc"
					/>
				</Head>
				<Container>
					<PageTitle.h1>Discover the ultimate travel experience with our chauffeur service</PageTitle.h1>
					<BookingSection />
					<ServiceInfo
						image={image}
						text="When it comes to limousine tour services, you can’t go wrong with hiring a chauffeur. From the comfort of sophisticated limousines to the convenient transportation for any special event like wine tours and destination weddings, having a chauffeur at the wheel is an asset that many appreciate. Enjoying a limousine service with a professional chauffeur behind the wheel provides an experience unmatched by other forms of transportation. So next time you’re looking for limousine tours or chauffeur services, make sure your expectations are nothing short of extraordinary!"
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

export default Tours;
