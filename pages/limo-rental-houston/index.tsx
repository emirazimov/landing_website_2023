import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import limoServiceSanFranciscoImage from 'public/limo-services/rental.png';
import Image from 'next/image';
import { imageLoader } from 'helpers/image';
import { BLACK_CARS, CARS } from 'constants/routes';
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
        desc: 
        `   As one of the most vibrant and diverse cities in the United States, Houston has become a hub for business and entertainment. With Bookinglane, you can experience the city like never before with our premium limousine rental service.

            Our fleet of top-of-the-line vehicles is perfect for any occasion, from airport transportation to corporate events and special occasions. Whether you need a black car service, town car service, or luxury car service, Bookinglane has got you covered.

            When you choose Bookinglane, you can expect the highest level of professionalism and customer service. Our experienced chauffeurs will ensure that you arrive at your destination safely and on time, and our customer support team is always available to answer any questions or concerns.

            With Bookinglane, you'll also enjoy competitive pricing and transparent billing, so you can have peace of mind knowing that you're getting the best value for your money.

            Don't settle for anything less than the best when it comes to luxury transportation in Houston. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks.
        `
    }
];

function limoServiceSanFrancisco() {
	const windowSize = useWindowSize();
	// const image = isMobile(windowSize.width) ? toursMobile : tours;

	return (    
		<Layout>
			<>
				<Head>
					<title>Houston Limo Rental | Bookinglane</title>
					<meta
						name="description"
						content="Rent a limo in Houston with Bookinglane for your next special occasion. Choose from a variety of stylish and luxurious vehicles. Book now!"
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Houston limousine rental</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={limoServiceSanFranciscoImage}
                        alt="Houston limousine rental"
                        loader={imageLoader}
                    />
                    <ContainerContent>
                        {descriptionText?.map((item, idx) => (
                            <Description key={idx}>
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

export default limoServiceSanFrancisco;
