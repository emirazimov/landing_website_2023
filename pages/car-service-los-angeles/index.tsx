import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import ServiceInfo from 'components/common/ServiceInfo';
import PageTitle from 'components/common/PageTitle';
import CitiesAndAirportsDescription from 'components/common/CitiesAndAirportsDescription';
import carServiceLosAngelesImage from 'public/car-services/car-service-los-angeles.png';
import WithListAndImg from 'components/common/WithListAndImg';
import { useEffect } from 'react';
import Image from 'next/image';
import { imageLoader } from 'helpers/image';
import { BLACK_CARS } from 'constants/routes';
import colors from 'constants/colors';

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
        title: "Luxury car service in Los Angeles",
        desc: `Los Angeles is a sprawling city, and getting around can be a challenge. That's where Bookinglane comes in. We offer premium car service that will get you where you need to go in style and comfort. Our fleet includes a range of luxury sedans and SUVs, so you can choose the perfect vehicle for your needs.
        `,
        tag: "h2"
    },
    {
        title: "Reliable transportation for business travel",
        desc: `
            If you're visiting Los Angeles on business, you need a car service that you can rely on. With Bookinglane, you'll never have to worry about being late for a meeting. Our expert drivers know the city inside and out and will get you to your destination on time, every time. Plus, our <a style="color: ${colors.blue};font-weight: 500;" href="/${BLACK_CARS.LOS_ANGELES}">black car</a> service is the perfect way to make a great impression on clients and colleagues.
        `
    },
    {
        title: "Airport transfers made easy",
        desc: `
            Flying into LAX? Let Bookinglane take care of your airport transfer. We'll meet you at baggage claim and take you directly to your destination, whether that's a hotel, office, or conference center. Our drivers will handle your luggage and make sure you arrive at your destination safely and on time.
        `
    },
    {
        title: "The ultimate limo service experience",
        desc: `
            If you're looking for something special, why not book a limo? Bookinglane offers the ultimate limo service experience in Los Angeles. Our limos are equipped with all the latest amenities, including plush leather seats, premium sound systems, and climate control. It's the perfect way to make a special occasion even more memorable.
        `
    },
    {
        title: "Safety first",
        desc: `
            At Bookinglane, safety is our top priority. All of our drivers undergo rigorous training and background checks to ensure that they are qualified to provide safe and reliable transportation. We also regularly maintain and inspect our fleet to ensure that our vehicles are always in top condition.

            Whether you're visiting Los Angeles for business or pleasure, Bookinglane is your go-to car service. Book your black car or limo today and experience the ultimate in luxury transportation. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks.
        `
    },
];

function CarServiceLosAngeles() {
	const windowSize = useWindowSize();
	// const image = isMobile(windowSize.width) ? toursMobile : tours;

	return (    
		<Layout>
			<>
				<Head>
					<title>Luxury Car Service in Los Angeles | Bookinglane</title>
					<meta
						name="description"
						content="Need reliable car service in Los Angeles? Look no further than Bookinglane. We offer premium black car and limo service, airport transfers, and more. Book now!"
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Car Service in Los Angeles</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={carServiceLosAngelesImage}
                        alt="Luxury car service in Los Angeles"
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

export default CarServiceLosAngeles;
