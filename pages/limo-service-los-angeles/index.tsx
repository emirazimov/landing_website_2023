import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import limoServiceLosAngelesImage from 'public/limo-services/limo-service-los-angeles.png';
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
        title: "Arrive in style with our top-rated limo service",
        desc: 
        `   Are you looking for a reliable and luxurious limo service in Los Angeles? Look no further than Bookinglane! Our premium limo service offers a fleet of <a style="color: ${colors.blue};font-weight: 500;" href="/${BLACK_CARS.LOS_ANGELES}">black cars</a> and luxury sedans, ensuring that you travel in style and comfort.
        `,
        tag: "h2"
    },
    {
        title: "Why choose Bookinglane?",
        desc: 
        `   Bookinglane is the top choice for thousands of people in Los Angeles who demand only the best for their transportation needs. Our drivers are highly trained professionals with extensive knowledge of the city, ensuring that you arrive at your destination safely and on time. Plus, with our easy booking process and instant quote system, you can rest assured that you're getting the best possible price for your ride.
        `,
    },
    {
        title: "Experience the best limo service in Los Angeles",
        desc: 
        `   Whether you're traveling for business or pleasure, our limo service in Los Angeles is the perfect way to arrive in style. We offer airport transfers to LAX and other major airports, as well as inner-city and inter-city rides for all your transportation needs. Our corporate travel options are perfect for executives who demand only the best, while our luxury sedans are perfect for special events like weddings and proms.
        `,
    },
    {
        title: "Safety first with Bookinglane",
        desc: 
        `   At Bookinglane, safety is our top priority. Our drivers are fully licensed and insured, and our vehicles undergo regular maintenance and safety checks to ensure that you arrive at your destination safely. Plus, with our GPS tracking and real-time traffic updates, we can help you avoid traffic and get to your destination as quickly and safely as possible.
        `,
    },
    {
        title: "Book your limo service today",
        desc: 
        `   Don't settle for anything less than the best limo service in Los Angeles. Book your ride with Bookinglane today and experience the ultimate in luxury transportation. With our easy booking process and instant quote system, it's never been easier to arrive in style.
        `,
    }
];

function limoServiceLosAngeles() {
	const windowSize = useWindowSize();
	// const image = isMobile(windowSize.width) ? toursMobile : tours;

	return (    
		<Layout>
			<>
				<Head>
					<title>Luxury Limo Service in Los Angeles - Book Your Ride Today | Bookinglane</title>
					<meta
						name="description"
						content="Looking for a reliable and luxurious limo service in Los Angeles? Look no further than Bookinglane! Our premium limo service offers a fleet of black cars and luxury sedans, ensuring that you travel in style and comfort. Book your ride today!"
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Luxury limo service in Los Angeles</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={limoServiceLosAngelesImage}
                        alt="Limo service in Los Angeles"
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

export default limoServiceLosAngeles;
