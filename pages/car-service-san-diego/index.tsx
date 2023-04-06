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
import carServiceSanDiegoImage from 'public/car-services/car-service-san-diego.png';
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
        title: "Luxury car service in San Diego",
        desc: `San Diego is a city of breathtaking beauty, with miles of pristine beaches, stunning coastline, and a vibrant downtown. Whether you're visiting for business or pleasure, getting around the city in comfort and style is essential. That's where Bookinglane's luxury car service comes in.`,
        tag: 'h2'
    },
    {
        title: "The best transportation service in San Diego",
        desc: `Bookinglane is the top transportation service provider in San Diego, offering the highest level of comfort, convenience, and safety. Our fleet of luxury sedans and <a style="color: ${colors.blue};font-weight: 500;" href="/${BLACK_CARS.SAN_DIEGO}">black cars</a> are all late-model and equipped with the latest amenities, ensuring that you travel in style and comfort.`,
        tag: "h2"
    },
    {
        title: "Airport transfer in San Diego",
        desc: `Our airport transfer service in San Diego is the best way to start and end your trip. We offer reliable and punctual transportation to and from San Diego International Airport, ensuring that you never miss a flight or arrive late for a meeting. Our professional chauffeurs will meet you at the airport and assist with your luggage, making your travel experience as stress-free as possible.`
    },
    {
        title: "Business travel in San Diego",
        desc: `Bookinglane's car service is the ideal solution for business travelers in San Diego. Our professional and reliable chauffeurs will get you to your meetings, conferences, and events on time and in style. With our luxury sedans and black cars, you can impress your clients and colleagues while staying comfortable and productive on the road.`
    },
    {
        title: "Sightseeing in San Diego",
        desc: 
        `   San Diego is a city of many sights and sounds, and Bookinglane's car service is the perfect way to explore it all. Whether you want to visit the San Diego Zoo, Balboa Park, or La Jolla Cove, our chauffeurs will take you there in comfort and style. Enjoy the stunning coastal views and experience the city's vibrant culture with our sightseeing service.

            In summary, if you're looking for the best car service in San Diego, Bookinglane has you covered. With our luxury fleet, professional chauffeurs, and commitment to safety and comfort, we're the top choice for business travelers, tourists, and locals alike. Book your car service with us today and experience the best transportation service in San Diego. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks.
        `
    },
];

function CarServiceSanDiego() {
	const windowSize = useWindowSize();
	// const image = isMobile(windowSize.width) ? toursMobile : tours;

	return (    
		<Layout>
			<>
				<Head>
					<title>Luxury Car Service in San Diego | Bookinglane</title>
					<meta
						name="description"
						content="Experience the best transportation service in San Diego with Bookinglane. Book your airport transfers, business travel, and sightseeing services with our luxury fleet and professional chauffeurs."
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Professional car service in San Diego</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={carServiceSanDiegoImage}
                        alt="Car Service in San Diego"
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

export default CarServiceSanDiego;
