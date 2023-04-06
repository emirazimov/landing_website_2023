import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import limoServiceNapaValleyImage from 'public/car-services/black/houston.png';
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
        title: "Premium black car service in Houston, TX",
        desc: 
        `   Welcome to Bookinglane, your ultimate solution for luxury car service in Houston. Our black car service is designed to cater to all your needs, whether you need a ride to the airport or a special event. With Bookinglane, you will experience premium transportation services that are unparalleled in the industry.

            Our limousine service provides a stylish and comfortable ride to your destination. Our fleet of luxury cars is well-maintained, ensuring your safety and satisfaction. Whether you need a ride for a corporate event or a special occasion, our town car service and private car service are ready to cater to your needs.
        `,
        tag: "h2"
    },
    {
        title: "Exceptional black car service for all occasions",
        desc: 
        `   At Bookinglane, we understand the importance of punctuality when it comes to airport transportation. That's why we provide timely and efficient car service to the airport. Our experienced drivers will pick you up on time and ensure that you reach your destination hassle-free.

            With our luxury car service, you can travel in style and comfort. Our vehicles are equipped with modern amenities to ensure that your ride is comfortable and enjoyable. You can trust us to provide you with a luxurious and memorable experience.
            
            Booking with us guarantees you a safe, reliable, and hassle-free ride. Our transportation services are tailored to meet your needs, ensuring that you have an unforgettable experience. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks.
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
					<title>Houston Black Car Service | Bookinglane</title>
					<meta
						name="description"
						content="Experience luxury black car service in Houston with Bookinglane. Reliable, professional drivers and comfortable, stylish vehicles. Book now!"
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Houston black car service</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={limoServiceNapaValleyImage}
                        alt="Houston black car service"
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

export default limoServiceNapaValley;
