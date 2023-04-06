import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import limoServiceNapaValleyImage from 'public/car-services/black/napa-valley.png';
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
        title: "Luxury black car service for airport transfers and corporate travel",
        desc: 
        `   Welcome to Bookinglane, your premier provider of luxury black car service in Napa Valley. Our experienced and professional chauffeurs will ensure that your transportation needs are met with the highest level of service and comfort.

            Whether you're visiting Napa Valley for business or pleasure, Bookinglane offers the best in luxury black car service for all your transportation needs. We specialize in airport transfers to and from Napa Valley airports, including San Francisco International Airport (SFO), Oakland International Airport (OAK), and Sacramento International Airport (SMF).
        `,
        tag: "h2"
    },
    {
        title: "Custom tours of Napa Valley",
        desc: 
        `   Discover the best of Napa Valley with Bookinglane's custom tours. Our knowledgeable and friendly chauffeurs will take you on a journey through Napa Valley's beautiful vineyards, historic landmarks, and scenic countryside. Whether you're a wine enthusiast or just looking to explore the area, our custom tours are the perfect way to experience Napa Valley in style and comfort.
        `,
        tag: "h2"
    },
    {
        title: "Limo service for special occasions",
        desc: 
        `   Make your special occasion even more memorable with Bookinglane's limo service. Whether it's a wedding, anniversary, or birthday celebration, our luxury limos are the perfect way to make a statement and arrive in style. Our professional chauffeurs will ensure that you and your guests are treated like VIPs from start to finish.
        `,
        tag: "h2"
    },
    {
        title: "Easy booking and reliable service",
        desc: 
        `   At Bookinglane, we make it easy to book your black car service in Napa Valley. Our user-friendly online booking system allows you to reserve your luxury sedan or limo service in just a few clicks. And once your reservation is confirmed, you can rest assured that our reliable and professional chauffeurs will arrive on time and ready to provide you with the best possible service.
        `,
        tag: "h3"
    },
    {
        title: "The best in car service",
        desc: 
        `   Bookinglane is dedicated to providing our clients with the best possible car service in Napa Valley. From our fleet of luxury sedans and limos to our experienced and courteous chauffeurs, we strive to exceed your expectations and make your transportation experience truly exceptional. Book your black car service with Bookinglane today and experience the ultimate in luxury transportation in Napa Valley.
        `,
        tag: "h3"
    }
];

function limoServiceNapaValley() {
	const windowSize = useWindowSize();

	return (    
		<Layout>
			<>
				<Head>
					<title>Luxury Black Car Service in Napa Valley - Bookinglane</title>
					<meta
						name="description"
						content="Discover the best of Napa Valley with Bookinglane's luxury black car service. Enjoy custom tours, airport transfers, and corporate travel with our experienced and professional chauffeurs."
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Black car service in Napa Valley - Bookinglane</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={limoServiceNapaValleyImage}
                        alt="Black car service in Napa Valley"
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

export default limoServiceNapaValley;
