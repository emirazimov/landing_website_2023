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
import carServiceNapaValleyImage from 'public/car-services/car-service-napa-valley.png';
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
        title: "Discover the beauty of Nappa Valley with our car service",
        desc: `Looking for a reliable and comfortable car service in Napa Valley? Bookinglane is here to provide you with the best luxury transportation options available in the area. Whether you're traveling for business or pleasure, our experienced chauffeurs will take you to your destination in style and comfort.
        `,
        tag: "h2"
    },
    {
        title: "Luxury transportation for your business needs",
        desc: `If you're traveling to Napa Valley for business, you can count on us for a comfortable and efficient ride. Our professional chauffeurs are well-trained in the art of providing reliable and safe transportation for business travelers. They will ensure that you arrive at your destination on time, relaxed, and ready to take on the day.
        `,
        tag: "h2"
    },
    {
        title: "Experience the best of Napa Valley with our car service",
        desc: `Napa Valley is famous for its world-class wineries, restaurants, and scenic routes. Let our experienced chauffeurs take you on a tour of the region and show you its beauty and charm. Our <a style="color: ${colors.blue};font-weight: 500;" href="/${BLACK_CARS.NAPA_VALLEY}">black cars</a> and luxury sedans are equipped with all the necessary amenities to make your journey enjoyable and memorable.
        `,
        tag: "h2"
    },
    {
        title: "Safety and comfort guaranteed",
        desc: `At Bookinglane, we take your safety seriously. That's why all our vehicles are regularly inspected and maintained to the highest standards. Our professional chauffeurs are trained to handle any situation and will do their utmost to ensure that you have a safe and comfortable ride.
        `
    },
    {
        title: "Business travel made easy",
        desc: `When you choose Bookinglane for your business travel needs, you can count on us to provide you with the best service possible. Our team of experienced professionals will work with you to ensure that your transportation needs are met, from airport transfers to city tours and everything in between. Let us take care of the details, so you can focus on your business.

            In conclusion, whether you're traveling for business or leisure, Bookinglane's car service in Napa Valley is your best choice for luxury transportation. Contact us today to book your ride and experience the best of what Napa Valley has to offer. 
        `
    },
];

function CarServiceNapaValley() {
	const windowSize = useWindowSize();
	// const image = isMobile(windowSize.width) ? toursMobile : tours;

	return (    
		<Layout>
			<>
				<Head>
					<title>Luxury Car Service in Napa Valley | Bookinglane</title>
					<meta
						name="description"
						content="Discover the beauty of Napa Valley with Bookinglane's reliable and comfortable car service. Experience the best wineries and scenic routes in style and safety. Book now!"
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Car Service in Napa Valley</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={carServiceNapaValleyImage}
                        alt="Car Service in Napa Valley"
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

export default CarServiceNapaValley;
