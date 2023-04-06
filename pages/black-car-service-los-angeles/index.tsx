import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import limoServiceLosAngelesImage from 'public/car-services/black/los-angeles.png';
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
        desc: `
            When you need to travel in style and comfort in Los Angeles, there's no better option than Bookinglane's black car service. Whether you're looking for group transportation, airport transfers, or event transportation, we have you covered. Our easy booking process and personalized service make traveling with Bookinglane a breeze.
        `
    },
    {
        title: "Explore Los Angeles in luxury sedans and limos",
        desc: 
        `   Los Angeles is known for its vibrant nightlife and iconic landmarks, and there's no better way to experience it all than with Bookinglane's luxury sedans and limos. From the Hollywood Walk of Fame to Sunset Boulevard, our experienced drivers can take you wherever you need to go in style and comfort.
        `,
        tag: "h2"
    },
    {
        title: "Hassle-free airport transfers with Bookinglane",
        desc: 
        `   Traveling to and from the airport can be stressful, but with Bookinglane, it doesn't have to be. Our black car service provides reliable and comfortable airport transfers, so you can start and end your trip on a high note. Plus, with our easy booking process, you can reserve your ride in advance and relax knowing that we'll be there to pick you up.
        `,
        tag: "h2"
    },
    {
        title: "Event transportation for any occasion",
        desc: 
        `   No matter what kind of event you're attending in Los Angeles, Bookinglane can provide the perfect transportation solution. From weddings and proms to corporate events and concerts, our luxury sedans and limos will make sure you arrive in style. Our group transportation options are also perfect for larger groups.
        `,
        tag: "h2"
    },
    {
        title: "Why choose Bookinglane for your black car service needs?",
        desc: 
        `   At Bookinglane, we pride ourselves on our commitment to providing excellent service and exceeding our clients' expectations. Our professional and experienced chauffeurs will ensure that you arrive at your destination safely and on time. With our easy booking process and competitive pricing, you can enjoy luxury transportation without breaking the bank.
        `,
        tag: "h2"
    },
    {
        title: "Book your black car service with Bookinglane today",
        desc: 
        `   Don't settle for less when it comes to your transportation needs in Los Angeles. Book with Bookinglane and experience the best black car service in the city. 
        `,
        tag: "h3"
    }
];

function BlackCarServiceLosAngeles() {
	const windowSize = useWindowSize();
	// const image = isMobile(windowSize.width) ? toursMobile : tours;

	return (    
		<Layout>
			<>
				<Head>
					<title>Luxury Black Car Service in Los Angeles - Bookinglane</title>
					<meta
						name="description"
						content="Experience the ultimate in style and comfort with Bookinglane's black car service in Los Angeles. Hassle-free airport transfers and personalized service. Book now."
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Experience luxury black car service in Los Angeles with Bookinglane</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={limoServiceLosAngelesImage}
                        alt="BLack car service in Los Angeles"
                        loader={imageLoader}
                    />
                    <ContainerContent>
                        {descriptionText?.map((item, idx) => (
                            <Description key={idx}>
                                {item?.tag === "h2" ? (
                                    <h2>{item.title}</h2>
                                ) : item.title ? (
                                    <h3>{item.title}</h3>
                                ) : null}
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

export default BlackCarServiceLosAngeles;
