import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import limoServiceMontereyImage from 'public/limo-services/limo-service-monterey.png';
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
        title: "Travel in style and comfort with our limo service in Monterey CA",
        desc: 
        `   Bookinglane is your premium limo service provider in Monterey CA. Our top-of-the-line fleet of <a style="color: ${colors.blue};font-weight: 500;" href="/${BLACK_CARS.MONTEREY}">black cars</a> and luxury sedans is well-maintained and ensures the highest level of safety and comfort for all your transportation needs. Whether you require airport transfers, business travel, or inner-city and inter-city rides, Bookinglane has got you covered.

            Our limo service in Monterey CA is designed to exceed your expectations. With our professional drivers' knowledge of the city's traffic patterns, you can expect efficient and timely transportation. We take pride in providing prompt and reliable service, ensuring that our drivers always arrive on time to take you to your destination in style.
            
            Monterey CA is a city known for its beautiful coastline, historic landmarks, and world-class golf courses. With Bookinglane's limo service, you can experience all of the city's unique features in comfort and style. Our knowledgeable drivers can take you to popular attractions such as the 17-Mile Drive, Pebble Beach, and the charming town of Carmel. Additionally, our limo service is perfect for corporate travel, making your business trips as hassle-free and comfortable as possible.
        `,
        tag: "h2"
    },
    {
        title: "Corporate travel made easy with Bookinglane in Monterey CA",
        desc: 
        `   Booking your limo service in Monterey CA with Bookinglane is easy and hassle-free. Our instant quote system ensures you get the best price possible, and our easy booking process lets you reserve your ride in no time. We also offer a variety of payment options, making it convenient for you.

            At Bookinglane, we pride ourselves on our exceptional customer service. Our goal is to make every ride with us a memorable one, and we go above and beyond to ensure your satisfaction. Our limo service in Monterey CA is the perfect choice for all your transportation needs. Choose Bookinglane, and experience the benefits of a premium transportation provider. Join the thousands of satisfied customers who have made Bookinglane their go-to choice for transportation. Book your limo service in Monterey CA today.
        `,
    }
];

function limoServiceMonterey() {
	const windowSize = useWindowSize();
    
	return (    
		<Layout>
			<>
				<Head>
					<title>Premium Limo Service in Monterey CA | Bookinglane</title>
					<meta
						name="description"
						content="Travel in style and comfort with Bookinglane's premium limo service in Monterey CA. Perfect for airport transfers, corporate travel, and exploring the city's landmarks. Book now for hassle-free transportation."
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Premium limo service in Monterey CA by Bookinglane</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={limoServiceMontereyImage}
                        alt="Black car service in Monterey "
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

export default limoServiceMonterey;
