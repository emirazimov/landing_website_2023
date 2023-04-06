import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import carServiceSanFranciscoImage from 'public/car-services/airport.png';
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
        title: "Luxury car service for airport transportation in Houston",
        desc: `Looking for a reliable car service to get you to and from the airport in Houston? Look no further than Bookinglane. We offer luxury airport transportation services that are both convenient and comfortable, ensuring that you arrive at your destination relaxed and ready to take on the day.

            At Bookinglane, we prioritize your safety and satisfaction above all else. That's why we only hire the most experienced and professional drivers, and maintain a fleet of well-maintained luxury vehicles. Whether you're traveling alone or with a group, we have the perfect vehicle to accommodate your needs.`,
        tag: "h2"
    },
    {
        title: "Choose Bookinglane for convenient and comfortable airport tranfers",
        desc: 
        `  Bookinglane is more than just a car service. We offer a range of additional services to make your airport travel experience as stress-free as possible. From flight tracking and on-time pickups to luggage assistance and curbside drop-offs, we go above and beyond to ensure your satisfaction.

            With our easy online booking system, you can book your car service to the airport in just a few clicks. And with competitive pricing and no hidden fees, you can trust that you're getting the best value for your money with Bookinglane.
            
            Choose Bookinglane for your next trip to or from the airport in Houston and experience the difference that luxury car service can make. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks.
        `,
        tag: "h3"
    }
];

function carServiceSanFrancisco() {
	const windowSize = useWindowSize();

	return (    
		<Layout>
			<>
				<Head>
                    <title>Car Service to Airport | Bookinglane</title>

					<meta
						name="description"
						content="Get to the airport on time and in style with Bookinglane's Houston car service to airport. Easy booking, professional drivers, and luxury vehicles."
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Houston car service to airport</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={carServiceSanFranciscoImage}
                        alt="Houston car service to airport"
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
