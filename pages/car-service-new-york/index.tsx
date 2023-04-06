import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import carServiceSanFranciscoImage from 'public/car-services/new-york.png';
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
    margin-top: 145px;

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
        title: "Luxury car service in NYC for business travel, airport transfer, and more",
        desc: `If you're looking for a reliable car service in New York, look no further than Bookinglane. Our fleet of luxury sedans and group transportation vehicles is available for all your transportation needs in the city. Whether you're in town for business or pleasure, our chauffeur service will get you where you need to go in style and comfort.`,
        tag: "h2"
    },
    {
        title: "Easy booking process for car service in New York",
        desc: 
        `   At Bookinglane, we make booking car service in New York easy and hassle-free. With our online booking system, you can reserve your ride in just a few clicks. Our customer service team is available 24/7 to assist you with any questions or concerns you may have.
        `,
        tag: "h2"
    },
    {
        title: "Car service for JFK airport and beyond",
        desc: `Our car service in New York includes airport transfer to and from JFK airport. Our drivers are knowledgeable about the city and can help you navigate traffic and get you to your destination on time. We also offer event transportation and nightlife transportation, so you can enjoy all that New York has to offer without worrying about transportation.`,
        tag: "h2"
    },
    {
        title: "Chauffeur service for business travel",
        desc: 
        `   For business travelers, our chauffeur service provides a comfortable and professional experience. Our drivers are courteous and punctual, and our luxury sedans are equipped with amenities such as Wi-Fi and bottled water, so you can stay connected and refreshed during your journey.
        `,
        tag: "h2"
    },
    {
        title: "Experience the best of New York with Bookinglane",
        desc: 
        `   At Bookinglane, we're committed to providing our clients with the best car service in New York. Our drivers are professional and courteous, and our fleet of luxury sedans and group transportation vehicles is well-maintained and reliable. Whether you're in town for business or pleasure, we'll make sure you get where you need to go in comfort and style. Book your ride today and experience the best of New York with Bookinglane.
        `,
        tag: "h3"
    },
];

function carServiceSanFrancisco() {
	const windowSize = useWindowSize();

	return (    
		<Layout>
			<>
				<Head>
                    <title>Luxury Car Service in New York | Bookinglane</title>

					<meta
						name="description"
						content="Enjoy a hassle-free luxury car service in New York for airport transfers, business travel, and event transportation. Book a ride now with Bookinglane."
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Car service in New York - Book luxury sedans and group transportation with Bookinglane</PageTitle.h1>
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
