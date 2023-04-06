import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import limoServiceNapaValleyImage from 'public/cities/new-york.png';
import Image from 'next/image';
import { imageLoader } from 'helpers/image';
import colors from 'constants/colors';
import { AIRPORTS, CARS, LIMOS } from 'constants/routes';

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
        title: "Luxury chauffeur service for business and pleasure",
        desc: 
        `   Bookinglane is the premier chauffeur service in New York, offering <a style="color: ${colors.blue};font-weight: 500;" href="/${CARS.NEW_YORK}">luxury sedan</a> and <a style="color: ${colors.blue};font-weight: 500;" href="/${LIMOS.NEW_YORK}">limo service</a> for travelers in the city. Whether you need a ride to JFK <a style="color: ${colors.blue};font-weight: 500;" href="/${AIRPORTS.NEW_YORK}">airport</a>, a corporate event, or a night out on the town, our professional chauffeurs will provide exceptional service that exceeds your expectations.
        `,
        tag: "h2"
    },
    {
        title: "Reliable and professional chauffeur service",
        desc: 
        `   At Bookinglane, we understand the importance of punctuality and reliability when it comes to transportation. That's why we have a team of highly trained chauffeurs who are knowledgeable about the best routes in the city and can navigate the busy streets with ease. Whether you're traveling for business or pleasure, our reliable and professional chauffeur service will ensure that you get to your destination on time and in style.
        `,
        tag: "h3"
    },
    {
        title: "Luxury sedan fleet",
        desc: 
        `   Our luxury sedan fleet is perfect for corporate travel and business travel, offering a comfortable and stylish mode of transportation for your travels in the city. From the sleek and sophisticated Mercedes S-Class to the spacious and luxurious Cadillac Escalade, we have a wide range of luxury sedans to choose from.
        `,
        tag: "h3"
    },
    {
        title: "Airport transfers to JFK airport",
        desc: 
        `   We understand the stress and hassle of airport travel, which is why we offer airport transfers to JFK airport and other major airports in the area. With our reliable and professional chauffeur service, you can relax and enjoy the ride, knowing that you will arrive at your destination on time and in style.
        `,
        tag: "h3"
    },
    {
        title: "Exceptional service for your travel needs",
        desc: 
        `   At Bookinglane, we are committed to providing exceptional service that meets your unique travel needs. Whether you need a ride to a business meeting or a night out on the town, our professional chauffeurs will provide the highest level of service that exceeds your expectations.

            Contact us today to book your luxury sedan and airport transfer with Bookinglane – the premier chauffeur service in New York.
        `,
        tag: "h3"
    }
];

function chauffeurServiceNewYork() {
	const windowSize = useWindowSize();

	return (    
		<Layout>
			<>
				<Head>
					<title>Professional Chauffeur Service in New York City | Bookinglane</title>
					<meta
						name="description"
						content="Experience the best in professional chauffeur service in New York City with Bookinglane. Our luxury sedan fleet, reliable airport transfers, and tailored corporate travel options provide the comfort and style you need for your next trip. Book now."
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Book executive car & chauffeur service in New York</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={limoServiceNapaValleyImage}
                        alt="Chauffeur service in Napa Valley"
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

export default chauffeurServiceNewYork;
