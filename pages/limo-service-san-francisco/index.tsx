import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import limoServiceSanFranciscoImage from 'public/limo-services/limo-service-san-francisco.png';
import Image from 'next/image';
import { imageLoader } from 'helpers/image';
import colors from 'constants/colors';
import { BLACK_CARS } from 'constants/routes';

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
        title: "Convenient and luxurious transportation for every occasion",
        desc: 
        `   San Francisco is a city full of life and excitement, with something to offer for everyone. From the iconic Golden Gate Bridge to the vibrant neighborhoods of the city, San Francisco is a destination that cannot be missed. Whether you are visiting for business or pleasure, Bookinglane is here to provide you with the best limo service in San Francisco.

            Our luxury sedan and <a style="color: ${colors.blue};font-weight: 500;" href="/${BLACK_CARS.SAN_FRANSISCO}">black car service</a> is perfect for any occasion, from airport transfers to corporate travel and inner-city rides. We offer reliable and punctual service, ensuring that you arrive at your destination safely and on time. Our team of professional and experienced drivers are knowledgeable about the local area, making your ride as comfortable and enjoyable as possible.
        `,
        tag: "h2"
    },
    {
        title: "Safe, reliable, and affordable limo service in San Francisco",
        desc: 
        `   At Bookinglane, we understand that your time is valuable, which is why we have made the booking process simple and easy. With our instant quote feature, you can get a price estimate for your ride in seconds. Our user-friendly platform allows you to book your ride in just a few clicks, making it easier than ever to get the transportation you need.

            In addition to our excellent service, we also offer competitive pricing, ensuring that you receive the best value for your money. We believe that luxury transportation should be accessible to everyone, and our pricing reflects this belief. Our services are available for all major airports in the Bay Area, including SFO, OAK, JSX, and SJC.
            
            Bookinglane is the preferred limo service provider for thousands of people in San Francisco and beyond. Our commitment to safety and comfort has earned us a reputation as one of the best limo services in the area. When you choose Bookinglane, you can relax and enjoy your ride, knowing that you are in good hands.
            
            Whether you are traveling for business or pleasure, Bookinglane has the perfect limo service for you. Book your ride today and experience the Bookinglane difference!
        `,
    }
];

function limoServiceSanFrancisco() {
	const windowSize = useWindowSize();
	// const image = isMobile(windowSize.width) ? toursMobile : tours;

	return (    
		<Layout>
			<>
				<Head>
					<title>Premium Limo Service in San Francisco | Bookinglane</title>
                    
					<meta
						name="description"
						content="Travel in style with Bookinglane's luxury limo service in San Francisco. Safe, reliable, and affordable transportation for any occasion. Book now for the best value!"
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Premium limo service in San Francisco by Bookinglane</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={limoServiceSanFranciscoImage}
                        alt="Limo service in San Francisco"
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

export default limoServiceSanFrancisco;
