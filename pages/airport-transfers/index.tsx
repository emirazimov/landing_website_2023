import Layout from 'components/layout';
import styled from 'styled-components';
import airport from 'public/service-pages/airport-transfer.png';
import airportMobile from 'public/service-pages-mobile/airport-transfer.png';
import BookingSection from 'components/common/booking';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import Head from 'next/head';
import ServiceInfo from 'components/common/ServiceInfo';
import PageTitle from 'components/common/PageTitle';
import CitiesAndAirportsDescription from 'components/common/CitiesAndAirportsDescription';
import descritionImage from 'public/service-pages/aiportDescriptionPhoto.png';

const Container = styled.div`
	flex: 1;
`;

const H1WithPadding = styled(PageTitle.h1)`
	padding-top: 20
`


const leftDescriptionText = `
	Book your airport transfer with confidence with Bookinglane, knowing that you will arrive at your destination in comfort, style, and luxury. Our limo executive car and chauffeur service are the ultimate solution for your transportation needs, providing you with a worry-free and stress-free experience from start to finish.

	Our professional and experienced chauffeurs are dedicated to providing the highest quality transportation services, with a focus on safety, reliability, and comfort. Our limo service offers a range of luxurious vehicles, including premium limousines, to ensure that you arrive at the airport in style.

	Our airport transfer service is fully customizable, and we will work with you to create an itinerary that meets your specific needs and requirements.
`;

const rightDescriptionText = `
	We understand that your time is valuable, which is why we always strive to provide punctual and efficient service. You can trust us to get you to the airport on time, so you can relax and enjoy your journey.

	In addition to our airport transfer services, we also offer a range of other transportation solutions, including executive car and chauffeur services, corporate transportation, and special events transportation. Our experienced team is always on hand to provide you with the best advice and recommendations, ensuring that your travel needs are met.

	So why wait? Book your airport transfer today and let us take care of the rest. Contact us for more information about our limo service and chauffeur services and experience the ultimate in airport transportation. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks. 
`;

function AirportTransfers() {
	const windowSize = useWindowSize();
	const image = isMobile(windowSize.width) ? airportMobile : airport;

	function renderDescriptionTitle() {
		return (
			<H1WithPadding>Traveling domestically or internationally?</H1WithPadding>
		);
	}

	return (
		<Layout>
			<>
				<Head>
					<title>Reliable Airport Transfers with Bookinglane</title>

					<meta
						name="description"
						content="Arrive on time and in style with Bookinglane airport transfer services. Safe and hassle-free rides, book now!"
						key="desc"
					/>
				</Head>
				<Container>
					<PageTitle.h1>Airport transfer: book your limo executive car & chauffeur service</PageTitle.h1>
					<BookingSection />
					<ServiceInfo
						image={image}
						text="Our company specializes in airport transfers and can get you to and from the airport, smoothly and hassle-free. Our executive cars provide an extra touch of luxury while ensuring that you make your flight on time. Whether you are early or late, our experienced chauffeurs ensure that VIP service is standard no matter where you are headed. We guarantee a pleasant ride from your starting point to the airport or from airport to your destination of choice. Providing airport transfers with timely efficiency is our passion and we take great pride in serving our customers with excellence."
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

export default AirportTransfers;
