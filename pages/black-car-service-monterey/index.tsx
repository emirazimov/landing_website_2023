import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import limoServiceMontereyImage from 'public/car-services/black/monteray.png';
import Image from 'next/image';
import { imageLoader } from 'helpers/image';

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
        title: "Professional chauffeurs and luxury sedans for airport transfers, corporate travel, and more",
        desc: 
        `   Bookinglane is proud to offer the highest level of black car service in Monterey. Our team of professional chauffeurs is dedicated to providing you with a comfortable, stylish, and stress-free ride to your destination, whether you need airport transfers, corporate travel, or luxury sedan service for any other occasion.
        `,
        tag: "h2"
    },
    {
        title: "Easy booking for your convenience",
        desc: 
        `   We understand that travel can be stressful, which is why we've made our booking process as simple and hassle-free as possible. With Bookinglane, you can easily reserve your black car service in Monterey online or by phone, and our professional team will take care of the rest.
        `,
        tag: "h3"
    },
    {
        title: "Luxury sedans for any occasion",
        desc: 
        `   Our fleet of luxury sedans is the perfect choice for any occasion in Monterey. Whether you're visiting Pebble Beach, exploring Carmel, or taking a scenic drive along the 17-Mile Drive, our black car service will ensure that you arrive in style and comfort. Our vehicles are equipped with all the amenities you need for a relaxing and enjoyable ride.
        `,
        tag: "h3"
    },
    {
        title: "Corporate travel that exceeds your expectations",
        desc: 
        `   At Bookinglane, we understand that corporate travel requires a higher level of service. That's why we offer tailored black car service in Monterey that exceeds your expectations. Our professional chauffeurs are committed to punctuality, reliability, and professionalism, ensuring that your travel experience is stress-free and enjoyable.
        `,
        tag: "h3"
    },
    {
        title: "Discover the beauty of Pebble Beach and Carmel with Bookinglane",
        desc: 
        `   Pebble Beach and Carmel are two of the most beautiful and iconic destinations in Monterey. With Bookinglane's black car service, you can explore these locations in comfort and style. Our professional chauffeurs will take you to all the top attractions, including the Pebble Beach Golf Links and the Carmel Mission, ensuring that your experience is unforgettable.
        `,
        tag: "h2"
    },
    {
        title: "Experience the scenic 17-Mile Drive with Bookinglane",
        desc: 
        `   The 17-Mile Drive is a must-see attraction in Monterey, with breathtaking views of the Pacific Ocean and the rugged California coastline. With Bookinglane's black car service, you can experience this scenic drive in the comfort of a luxury sedan. Our professional chauffeurs will guide you through the route and ensure that you don't miss any of the iconic landmarks along the way.
        `,
        tag: "h2"
    },
    {
        title: "Affordable rates for unbeatable service",
        desc: 
        `   At Bookinglane, we believe that everyone deserves to experience the highest level of black car service in Monterey, without breaking the bank. That's why we offer affordable rates for our luxury sedans, while still providing unbeatable service and professionalism. Contact us today to learn more about our rates and to book your black car service in Monterey.

            In summary, Bookinglane offers the highest level of black car service in Monterey, with a focus on the unique features of the city, including Pebble Beach, Carmel, and the 17-Mile Drive. Our professional chauffeurs and luxury sedans ensure that your travel experience is comfortable, stylish, and stress-free, whether you need airport transfers, corporate travel, or luxury sedan service for any other occasion. Contact us today to experience the best that Monterey has to offer. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks. 
        `,
        tag: "h2"
    }
];

function limoServiceMonterey() {
	const windowSize = useWindowSize();
    
	return (    
		<Layout>
			<>
				<Head>
					<title>Luxury Black Car Service in Monterey - Bookinglane</title>
					<meta
						name="description"
						content="Experience comfort and style with Bookinglane's black car service in Monterey. Professional chauffeurs, luxury sedans, and easy booking for airport transfers, corporate travel, and more."
					/>
				</Head>
				<Container>
					<PageTitle.h1>Black car service in Monterey - Experience luxury with Bookinglane</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={limoServiceMontereyImage}
                        alt="Black car service in Monterey "
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
                                <span>{item.desc}</span>
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

export default limoServiceMonterey;
