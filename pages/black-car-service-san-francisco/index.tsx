import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import limoServiceSanFranciscoImage from 'public/car-services/black/san-francisco.png';
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
        title: "Experience the best in group transportation and nightlife travel",
        desc: 
        `   Are you planning a trip to San Francisco and need reliable and luxurious transportation? Look no further than Bookinglane's black car service. Our fleet of luxury sedans and professional chauffeurs will ensure you arrive at your destination in style and comfort.

            Whether you're traveling for business or pleasure, our black car service is the perfect choice for your transportation needs. Our easy booking process makes it simple to reserve your vehicle, and our competitive pricing means you get the best value for your money.
            
            San Francisco is a city known for its vibrant nightlife and exciting events. With our group transportation and nightlife travel services, you can rest assured that you'll get to your destination safely and in style. Our experienced drivers know the city well and can take you to the best bars, restaurants, and clubs.
            
            Bookinglane is the premier choice for event transportation in San Francisco. From corporate events to weddings, we have the experience and expertise to provide the highest level of service. Our personalized service and attention to detail ensure that your transportation needs are met with the utmost care.
        `,
        tag: "h3"
    },
    {
        title: "Why choose Bookinglane for your San Francisco event transportation needs?",
        desc: 
        `   <ul style=" margin: 0; line-height: 15px ">
                <li>Reliable and on-time service</li>
                <li>Competitive pricing</li>
                <li>Luxurious and comfortable vehicles</li>
                <li>Easy booking process</li>
                <li>Personalized service</li>
            </ul>     
        `,
        tag: "h3"
    }
];

function BlackCarServiceSanFrancisco() {
	const windowSize = useWindowSize();
	// const image = isMobile(windowSize.width) ? toursMobile : tours;

	return (    
		<Layout>
			<>
				<Head>
					<title>Black Car Service San Francisco - Luxury Transportation | Bookinglane</title>
					<meta
						name="description"
						content="Need luxury transportation in San Francisco? Look no further than Bookinglane's black car service. Our professional chauffeurs and luxury sedans ensure a stylish and comfortable ride. Book now!"
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Black car service San Francisco: Luxury transportation for any occasion</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={limoServiceSanFranciscoImage}
                        alt="Black car service in San Francisco"
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

export default BlackCarServiceSanFrancisco;
