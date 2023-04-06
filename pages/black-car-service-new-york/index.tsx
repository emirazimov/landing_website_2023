import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import limoServiceNapaValleyImage from 'public/car-services/black/new-york.png';
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
        title: "Professional chauffeur service for your business travel needs",
        desc: 
        `   Bookinglane provides a luxury chauffeur service in New York City, catering to the transportation needs of business and leisure travelers. Our professional chauffeurs are experienced and knowledgeable about the city's best routes, ensuring that you arrive at your destination on time and in style.
        `,
        tag: "h2"
    },
    {
        title: "Luxury sedan fleet for your comfort",
        desc: 
        `   Our luxury sedan fleet includes top-of-the-line vehicles such as the Mercedes S-Class, BMW 7 Series, and Cadillac Escalade, ensuring that you receive the utmost comfort and style during your ride.
        `,
        tag: "h3"
    },
    {
        title: "Efficient airport transfers to and from JFK",
        desc: 
        `   We provide efficient airport transfers to and from JFK, LaGuardia, and Newark airports. Our reliable and professional chauffeur service ensures that you don't have to worry about navigating the city's busy airports, and can instead sit back and relax in the comfort of our luxury sedans.
        `,
        tag: "h3"
    },
    {
        title: "Catering to your corporate travel needs",
        desc: 
        `   Bookinglane's chauffeur service is tailored to meet the specific needs of business and corporate travelers, offering flexible scheduling and dependable service for meetings, events, and other business-related travel needs.
        `,
        tag: "h3"
    },
    {
        title: "Book your New York city chauffeur service today",
        desc: 
        `   Whether you're traveling for business or leisure, Bookinglane's luxury chauffeur service in New York City provides the comfort and reliability you need. Contact us today to book your ride and experience the best in professional chauffeur service. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks. 
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
					<title>Black Car Service in New York City | Bookinglane</title>
					<meta
						name="description"
						content="Book a luxury black car service in New York City with Bookinglane. Our professional chauffeurs and top-of-the-line vehicles provide the utmost comfort and style for your airport transfer, corporate travel, or business trip needs."
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>New York city black car service - Book with Bookinglane</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={limoServiceNapaValleyImage}
                        alt="Black car service in New York"
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
