import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import carServiceSanFranciscoImage from 'public/car-services/houston.png';
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
        title: "Experience the luxury and convenience of our Houston town car service",
        desc: `When it comes to reliable and high-quality transportation services in Houston, Bookinglane is the name to trust. Our town car service is the perfect option for those who want to travel in style and comfort without breaking the bank. With years of experience in the industry, we have become the go-to choice for those seeking the best town car service in Houston.`,
        tag: "h2"
    },
    {
        title: "Why choose Bookinglane’s town car  service?",
        desc: 
        `  At Bookinglane, we are committed to providing our clients with the best possible experience. Here are just a few reasons why you should choose our Houston town car service:

            <b>Professional and courteous chauffeurs</b>: Our chauffeurs are highly trained and experienced professionals who are committed to ensuring that you have a safe and comfortable ride.
            
            <b>Luxury vehicles</b>: We offer a wide selection of luxury vehicles to choose from, including town cars, sedans, and SUVs. All of our vehicles are meticulously maintained to ensure that they are in top condition for your trip.
            
            <b>Reliable and all-inclusive pricing</b>: We offer competitive and transparent pricing for our town car service in Houston. You can enjoy the luxury and comfort of our vehicles without breaking the bank.
            
            <b>Punctuality</b>: We understand the importance of being on time, which is why we make it our priority to arrive at your pickup location on time, every time.
            
            <b>Flexible and convenient</b>: We offer flexible and convenient transportation options that can be customized to meet your specific needs. Whether you need a one-way trip or a round-trip service, we've got you covered.
            
            With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks. Book your Houston town car service with Bookinglane today and experience the luxury and convenience of our top-notch transportation services.
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
                    <title>Houston Town Car Service | Luxury Black Car | Bookinglane</title>
					<meta
						name="description"
						content="Enjoy a luxurious ride with Bookinglane's town car service in Houston. Book now for safe, comfortable, and stylish transportation."
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Houston town car service</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={carServiceSanFranciscoImage}
                        alt="Houston town car service"
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
