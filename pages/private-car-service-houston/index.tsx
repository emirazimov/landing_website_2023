import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import carServiceSanFranciscoImage from 'public/car-services/private.png';
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
        font-size: 23px;
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
        title: "Reliable and professional private car service on Houston",
        desc: `Welcome to Bookinglane's Houston private car service page. Our company is committed to providing reliable and professional private car services to our clients in Houston and surrounding areas. Whether you need airport transportation, a ride to a business meeting, or a luxury car for a special occasion, Bookinglane has got you covered.

        Our private car service is designed to provide you with the utmost comfort, safety, and convenience. We offer a wide range of luxury vehicles, including town cars, black cars, and limousines, to meet your specific transportation needs. Our drivers are experienced, licensed, and insured, ensuring that you reach your destination safely and on time.
        
        Bookinglane's private car service is the perfect choice for those who value comfort and privacy. With our service, you can enjoy a stress-free ride to your destination without the hassle of navigating through traffic or finding a parking spot. Our drivers will take care of everything, so you can sit back, relax, and enjoy the ride.`,
        tag: "h2"
    },
    {
        title: "Enjoy the benefits of Bookinglane’s private car service",
        desc: 
        `  At Bookinglane, we understand that your time is valuable. That's why we offer a range of flexible options to meet your transportation needs. Whether you need a one-time ride or a regular transportation service, we can customize our services to fit your schedule and budget.

        Our private car service is also available for airport transportation. We offer reliable and convenient airport transportation services to and from all major airports in Houston, including George Bush Intercontinental Airport (IAH) and William P. Hobby Airport (HOU). With Bookinglane, you can rest assured that you will arrive at the airport on time and in style.
        
        Bookinglane's private car service provides you with a reliable, professional, and comfortable transportation experience. Our experienced drivers, luxury vehicles, and flexible options make us the best choice for your transportation needs in Houston. Contact us today to book your private car service and experience the Bookinglane difference. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks.
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
                    <title>Houston Private Car Service | Bookinglane</title>
					<meta
						name="description"
						content="Arrive in style and comfort with Bookinglane's Houston private car service. Professional chauffeurs, luxury vehicles, and easy booking."
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Houston private car service</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={carServiceSanFranciscoImage}
                        alt="Houston private car service"
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
