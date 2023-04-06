import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import ServiceInfo from 'components/common/ServiceInfo';
import PageTitle from 'components/common/PageTitle';
import CitiesAndAirportsDescription from 'components/common/CitiesAndAirportsDescription';
import carServiceMontereyImage from 'public/car-services/car-service-monterey.png';
import WithListAndImg from 'components/common/WithListAndImg';
import { useEffect } from 'react';
import Image from 'next/image';
import { imageLoader } from 'helpers/image';
import { BLACK_CARS } from 'constants/routes';
import colors from 'constants/colors';

const Container = styled.div`
	flex: 1;
`;


const ContainerContent = styled.div`
	width: 80%;
    margin: 0 auto;

    ${mediaDevice['mobile']`
        width: 100%;
    `}
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: auto;
    margin-top: 45px;

    ${mediaDevice['mobile']`
        margin-top: 35px;
    `}
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-weight: 400;
    font-size: 18px;
    line-height:  30px;
    white-space: pre-line;
    width: 100%;
    margin-bottom: ${pixelToRem(50)};
    margin-top: 50px;

    h2, h3 {
        font-size: 18px;
        line-height:  30px;
        margin: 0;
        padding: 0;
    }

    ${mediaDevice['mobile']`
        font-weight: 400;
        font-size: ${pixelToRem(12)};
        line-height: 19px;
    `}
`;  

const descriptionText = [
    {
        title: "Luxury fleet for any occasion",
        desc: `Whether you're traveling to Monterey for business or pleasure, Bookinglane has you covered with our luxury car service. Our fleet of vehicles includes <a style="color: ${colors.blue};font-weight: 500;" href="/${BLACK_CARS.MONTEREY}">black cars</a>, luxury sedans, and limousines, so you can arrive at your destination in style and comfort. Our professional chauffeurs are experienced in navigating the city's streets, ensuring that you reach your destination safely and on time.
        `,
        tag: "h2"
    },
    {
        title: "Safe and reliable airport transfer",
        desc: `If you're flying into Monterey, let Bookinglane take care of your airport transfer needs. Our reliable airport transfer service ensures that you arrive at your hotel or business meeting on time and without any hassle. Our chauffeurs will meet you at the airport, help you with your luggage, and transport you to your destination in one of our comfortable vehicles.
        `,
        tag: "h2"
    },
    {
        title: "Business travel made easy",
        desc: `At Bookinglane, we understand the importance of business travel. That's why we offer a range of services tailored specifically for our business clients. Whether you need transportation to and from meetings, airport transfers, or a dedicated chauffeur for the duration of your stay, we have you covered. Our professional chauffeurs are experienced in providing discreet and reliable service, so you can focus on your work while we take care of the rest.
        `,
        tag: "h2"
    },
    {
        title: "Experience the beauty of Monterey",
        desc: `Monterey is a beautiful coastal city that offers a wide range of attractions for visitors. From the famous Monterey Bay Aquarium to the scenic 17-Mile Drive, there's something for everyone to enjoy. With Bookinglane's car service, you can explore the city and its surroundings in comfort and style. Let us take you to Cannery Row for a delicious meal, or to the historic Cannery Row for some shopping. Whatever your plans are, we'll get you there safely and on time.
        `,
        tag: "h2"
    },
    {
        title: "Unmatched safety and comfort",
        desc: `At Bookinglane, your safety and comfort are our top priorities. We have implemented strict safety measures to ensure that our vehicles are clean and sanitized before each trip. Our professional chauffeurs are trained to follow all safety protocols, and we regularly check their health to ensure that they are fit to work. With our reliable and comfortable car service, you can rest assured that you'll reach your destination safely and in style.
        `
    },
    {
        title: "Book your car service today",
        desc: `Ready to experience the best car service in Monterey? Book your ride with Bookinglane today. We offer easy online booking and a range of payment options to make the process as smooth as possible. Our customer service team is available 24/7 to answer any questions you may have and help you plan your transportation needs. Book your car service with Bookinglane today and enjoy the comfort and convenience of luxury transportation. 
        `
    },
];

function CarServiceMonterey() {
	const windowSize = useWindowSize();
	// const image = isMobile(windowSize.width) ? toursMobile : tours;

	return (    
		<Layout>
			<>
				<Head>
					<title>Luxury Car Service in Monterey | Bookinglane</title>
					<meta
						name="description"
						content="Book a luxury car service in Monterey with Bookinglane. Our fleet of black cars, sedans, and limousines offers unmatched safety, comfort, and style. Book now for reliable airport transfers, business travel, or sightseeing."
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Car Service in Monterey</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={carServiceMontereyImage}
                        alt="Car Service in Monterey"
                        loader={imageLoader}
                    />
                    <ContainerContent>
                        {descriptionText?.map((item, idx) => (
                            <Description key={idx}>
                                {item?.tag === "h2" ? (
                                    <h2>{item.title}</h2>
                                ) : (
                                    <h3>{item.title}</h3>
                                )}
                                <span dangerouslySetInnerHTML={{ __html: item.desc }} />
                            </Description>
                        ))}
                    
					
                    </ContainerContent>
                    <ContactUs />
                    <Partners />
				</Container>
			</>
		</Layout>
	);
}

export default CarServiceMonterey;
