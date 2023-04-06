import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import limoServiceSanDiegoImage from 'public/car-services/black/san-diego.png';
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
        title: "Professional chauffeurs and luxury sedans for airport transfers and corporate travel",
        desc: 
        `   When it comes to black car service in San Diego, Bookinglane is the premier choice. Our team of professional chauffeurs is dedicated to providing you with the best possible experience, from the moment you book your luxury sedan to the time you reach your destination.
        `,
        tag: "h2"
    },
    {
        title: "Easy booking for stress-free travel",
        desc: 
        `   Bookinglane makes it easy to reserve your black car service in San Diego. With just a few clicks, you can book your airport transfer, corporate travel, or luxury sedan for a night out on the town. We understand that travel can be stressful, which is why we've streamlined our booking process to make it as simple and hassle-free as possible.
        `,
        tag: "h3"
    },
    {
        title: "Airport transfers with style and comfort",
        desc: 
        `   Whether you're heading to San Diego International Airport or any other airport in the area, Bookinglane has you covered. Our black car service is the perfect choice for airport transfers, providing you with style, comfort, and reliability. Our professional chauffeurs will ensure that you arrive on time and in style, so you can start your trip off right.
        `,
        tag: "h3"
    },
    {
        title: "Corporate travel that exceeds your expectations",
        desc: 
        `   At Bookinglane, we understand that corporate travel requires a different level of service. That's why we offer black car service that is tailored to meet the needs of our corporate clients. From punctuality to professionalism, our team is committed to exceeding your expectations and ensuring that your travel experience is as stress-free as possible.
        `,
        tag: "h3"
    },
    {
        title: "Luxury sedans for any occasion",
        desc: 
        `   In addition to airport transfers and corporate travel, Bookinglane also offers luxury sedan service for any occasion. Whether you're celebrating a special event or just want to enjoy a night out in San Diego, our black car service is the perfect choice. Our luxury sedans are equipped with all the amenities you need for a comfortable and stylish ride.
        `,
        tag: "h2"
    },
    {
        title: "Affordable rates for exceptional service",
        desc: 
        `   At Bookinglane, we believe that everyone deserves the best possible travel experience. That's why we offer our black car service at affordable rates, without compromising on quality or service. Contact us today to learn more about our rates and to book your luxury sedan in San Diego.

            In summary, Bookinglane is the premier choice for black car service in San Diego. Whether you need airport transfers, corporate travel, or luxury sedan service for any occasion, our team of professional chauffeurs is dedicated to providing you with the best possible experience. Book your black car service and experience the best that San Diego has to offer. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks.
        `,
        tag: "h2"
    }
];

function limoServiceSanDiego() {
	const windowSize = useWindowSize();
    
	return (    
		<Layout>
			<>
				<Head>
					<title>Black Car Service San Diego | Book Luxury Sedans with Bookinglane</title>
					<meta
						name="description"
						content="Book luxury black car service in San Diego with Bookinglane. Professional chauffeurs, easy booking, and stress-free travel for airport transfers, corporate travel, and more."
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Black car service San Diego - Experience the best with Bookinglane</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={limoServiceSanDiegoImage}
                        alt="Black car service in San Diego"
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

export default limoServiceSanDiego;
