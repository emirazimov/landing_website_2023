import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import limoServiceSanFranciscoImage from 'public/limo-services/new-york.png';
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
        title: "Ride in style and comfort with Bookinglane’s limo service",
        desc: 
        `   New York City is known for its hustle and bustle, and there's no better way to navigate its busy streets than with Bookinglane's top-notch limo service. Whether you're looking for a luxurious <a style="color: ${colors.blue};font-weight: 500;" href="/${BLACK_CARS.NEW_YORK}">black car</a>, a comfortable sedan, or a VIP chauffeur experience, Bookinglane has got you covered.

            Our easy booking process ensures that you can quickly and easily secure your limo service, and our experienced drivers will get you to your destination on time and in style. From airport transfers to nightlife transportation, we have the perfect solution for your needs.
        `,
        tag: "h2"
    },
    {
        title: "Experience the best of New York with Bookinglane’s limo service",
        desc: 
        `   At Bookinglane, we understand that our clients want the best of the best. That's why we offer a top-of-the-line fleet of luxury vehicles, including limos and black cars, all equipped with the latest technology and amenities. Our VIP chauffeur service ensures that you'll travel in the utmost comfort and luxury, while our professional drivers take care of all the details.

            Whether you're a business traveler looking to impress clients or a group of friends hitting the town for a night out, Bookinglane's limo service is the perfect choice. Trust us to get you where you need to go, and experience the best of New York City in style.
        `,
        tag: "h3"
    }
];

function limoServiceSanFrancisco() {
	const windowSize = useWindowSize();
	// const image = isMobile(windowSize.width) ? toursMobile : tours;

	return (    
		<Layout>
			<>
				<Head>
					<title>Luxury Limo Service in New York | Bookinglane</title>
                    
					<meta
						name="description"
						content="Experience the best luxury limo service in New York with Bookinglane. Enjoy our easy booking process, professional chauffeurs, and VIP treatment. Book now!"
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Luxury limo service in New York with Bookinglane</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={limoServiceSanFranciscoImage}
                        alt="Limo service in San Francisco"
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

export default limoServiceSanFrancisco;
