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
import carServiceSanFranciscoImage from 'public/car-services/car-service-san-francisco.png';
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
        title: "Experience luxury and comfort with our car service",
        desc: `If you're looking for a reliable and safe car service in San Francisco, look no further than Bookinglane. Our professional chauffeurs are dedicated to providing you with the highest level of service and comfort. Whether you need transportation to and from the airport, a corporate event, or a special occasion, we have a wide range of <a style="color: ${colors.blue};font-weight: 500;" href="/${BLACK_CARS.SAN_FRANSISCO}">black car</a> options, including luxury sedans and limousines, to suit your needs.`,
        tag: "h2"
    },
    {
        title: "The benefits of booking our car service",
        desc: 
        `   Our car service offers a number of benefits that set us apart from other transportation options in San Francisco. First and foremost, safety is our top priority. All of our vehicles are regularly serviced and maintained to ensure they are in top condition, and our chauffeurs are trained to prioritize safety in all situations.

            In addition to safety, we also prioritize comfort and luxury. Our fleet includes a range of high-end vehicles, from luxury sedans to limousines, all of which are equipped with amenities to make your ride as comfortable and enjoyable as possible. Whether you need to work on the go or simply relax and unwind, our car service has everything you need to make the most of your travel time.
        `,
    },
    {
        title: "Corporate travel with our car service",
        desc: `If you're traveling for business, our car service is the perfect solution. Our professional chauffeurs are experienced in navigating the city and can help you arrive at your destination on time and in style. We understand the importance of discretion and privacy in corporate travel, and our chauffeurs are trained to provide a discreet and professional service at all times.`,
    },
    {
        title: "Airport transfers with our car service",
        desc: 
        `   Booking our car service for your airport transfers ensures a hassle-free experience. We monitor your flight schedule to ensure that our chauffeur is there waiting for you when you arrive, even if your flight is delayed. Our airport transfer service includes meet and greet, luggage assistance, and a comfortable ride to your destination.

            In conclusion, if you're looking for a reliable, safe, and comfortable car service in San Francisco, Bookinglane is the right choice. Our commitment to safety, luxury, and professionalism makes us the ideal choice for business travel, airport transfers, and special occasions. Contact us today to book your next ride! With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks.
        `,
    },
];

function carServiceSanFrancisco() {
	const windowSize = useWindowSize();

	return (    
		<Layout>
			<>
				<Head>
					<title>Professional Car Service in San Francisco | Bookinglane</title>

					<meta
						name="description"
						content="Experience luxury and comfort with our professional car service in San Francisco. Safety, comfort, and luxury are our top priorities. Book now!"
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Professional car service in San Francisco</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={carServiceSanFranciscoImage}
                        alt="Car service in San Francisco"
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

export default carServiceSanFrancisco;
