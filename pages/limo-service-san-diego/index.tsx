import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import limoServiceSanDiegoImage from 'public/limo-services/limo-service-san-diego.png';
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
        title: "Travel in comfort and style with our limo service in San Diego",
        desc: 
        `   At Bookinglane, we understand that traveling in comfort and style is important to our clients. That's why we offer a premium limo service in San Diego that provides the highest level of luxury and convenience. Our fleet of <a style="color: ${colors.blue};font-weight: 500;" href="/${BLACK_CARS.SAN_DIEGO}">black cars</a> and luxury sedans are meticulously maintained to ensure a safe and comfortable ride for all your transportation needs.

            Whether you need an airport transfer, business travel, or inner-city and inter-city rides, our limo service in San Diego is designed to exceed your expectations. Our professional drivers are knowledgeable about the city's traffic patterns and can get you to your destination efficiently and safely. We take pride in providing prompt and reliable service, which is why our drivers always arrive on time and are ready to take you to your destination in style.
            
            Bookinglane's limo service in San Diego is the perfect way to explore the city's beautiful beaches, vibrant nightlife, and rich cultural heritage. Our knowledgeable drivers can take you to popular attractions such as the USS Midway Museum, the San Diego Museum of Art, and the Old Town San Diego State Historic Park. With our limo service, you can enjoy the city's sights and sounds in comfort and style.
        `,
        tag: "h2"
    },
    {
        title: "Exceptional customer service and easy booking with Bookinglane",
        desc: 
        `   Booking your limo service in San Diego is easy with Bookinglane. Our online booking process is simple and hassle-free, and our instant quote system ensures you get the best price possible. We also offer a variety of payment options to make the booking process as convenient as possible.

            At Bookinglane, we pride ourselves on our exceptional customer service. Our goal is to make every ride with us a memorable one, and we go above and beyond to ensure your satisfaction. Our limo service in San Diego is perfect for corporate travel, and our easy booking process makes it a breeze to schedule your transportation needs. With Bookinglane, you can be sure that your transportation needs are in good hands.
            
            Choose Bookinglane for your limo service in San Diego and experience the benefits of a premium transportation provider. Our limo service is the perfect choice for business travel, airport transfer, or simply exploring the city in comfort and style. Book your limo service in San Diego today and join the thousands of satisfied customers who have made Bookinglane their go-to choice for transportation.
        `,
    }
];

function limoServiceSanDiego() {
	const windowSize = useWindowSize();
    
	return (    
		<Layout>
			<>
				<Head>
					<title>Premium Limo Service in San Diego | Bookinglane</title>
					<meta
						name="description"
						content="Travel in comfort and style with Bookinglane's premium limo service in San Diego. Reliable, prompt, and hassle-free booking process. Book now and experience luxury transportation!"
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Premium limo service in San Diego by Bookinglane</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={limoServiceSanDiegoImage}
                        alt="Limo service in San Diego"
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

export default limoServiceSanDiego;
