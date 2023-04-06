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
import descritionImage2 from 'public/service-pages/book-chauffeur2.png';
import descritionImage from 'public/service-pages/book-chauffeur.png';
import WithListAndImg from 'components/common/WithListAndImg';
import { useEffect } from 'react';

const Container = styled.div`
	flex: 1;
`;

const leftDescriptionText = `Bookinglane booking platform offers a seamless and efficient limo and chauffeur service experience to clients in the East Bay area. Our platform is designed to simplify the booking process, allowing you to make reservations with ease and convenience. We offer a variety of transportation options to suit your needs, whether you require airport transfers, corporate events, or special occasions in all 33 cities of both Alameda and Contra Costa counties including:`

const rightDescriptionList = {
    1: [
        "Alameda",
        "Albany",
        "Antioch",
        "Berkeley",
        "Brentwood",
        "Clayton",
        "Concord",
        "Danville",
        "Dublin",
        "El Cerrito",
        "Emeryville"
    ],
    2: [
        "Fremont",
        "Hayward",
        "Hercules",
        "Lafayette",
        "Livermore",
        "Martinez",
        "Moraga",
        "Newark",
        "Oakland",
        "Oakley",
        "Orinda"
    ],
    3: [
        "Piedmont",
        "Pinole",
        "Pittsburg",
        "Pleasant Hill",
        "Pleasanton",
        "Richmond",
        "San Leandro",
        "San Pablo",
        "San Ramon",
        "Union City",
        "Walnut Creek",
    ]
}

function BookChauffeur() {
	const windowSize = useWindowSize();
	const mobile = isMobile(windowSize.width);

	function renderDescriptionTitle() {
		return (
			<PageTitle.h1 style={{ paddingTop: 20 }}>East Bay premier chauffeur service</PageTitle.h1>
		);
	}

	return (
		<Layout>
			<>
				<Head>
					<title>Premier Chauffeur & Limo Service in East Bay | Bookinglane</title>
					<meta
						name="description"
						content="Book reliable and luxurious transportation in East Bay with Bookinglane. Professional drivers, top-notch vehicles, and competitive pricing. Book your ride today!"
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Book chauffeur & limo service in the { mobile ? "" : <br /> } East Bay</PageTitle.h1>
					<BookingSection />
                    
                    <WithListAndImg 
                        renderDescriptionTitle={renderDescriptionTitle}
                        image={descritionImage} 
                        imgAlt="East Bay premier chauffeur service" 
                        leftDescriptionText={leftDescriptionText}   
                        rightDescriptionList={rightDescriptionList} 
                    />
					<CitiesAndAirportsDescription
						leftDescriptionText={`
                            Our team of professional and experienced drivers are knowledgeable about the local area, ensuring that you arrive at your destination safely and on time. Our fleet of vehicles is regularly maintained to ensure that you enjoy a comfortable and luxurious ride. We offer a range of vehicles to suit your needs, from sleek sedans to spacious SUVs and even limousines for that extra special occasion.

                            At Bookinglane, we understand that your time is valuable, which is why we offer a reliable and punctual service. We pride ourselves on being prompt and efficient, allowing you to focus on your schedule without worrying about transportation logistics. Our team is available 24/7 to answer any questions or concerns you may have, ensuring that you have a stress-free and enjoyable experience with us.
                        `}
						rightDescriptionText={`
                            In addition to our excellent service, we also offer competitive pricing, ensuring that you receive the best value for your money. We believe that luxury transportation should be accessible to everyone, and our pricing reflects this belief.

                            If you're in the East Bay area and require a limo and black car service, look no further than Bookinglane. Our user-friendly platform, professional drivers, and top-notch vehicles make us the ideal choice for your transportation needs. Book your ride today and experience the Bookinglane difference! With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks.
                        `}
						image={descritionImage2}
                        imgAlt="East Bay area limo and black car service"
					/>
					<ContactUs />
					<Partners />
				</Container>
			</>
		</Layout>
	);
}

export default BookChauffeur;
