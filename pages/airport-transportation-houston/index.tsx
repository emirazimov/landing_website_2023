import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import limoServiceSanFranciscoImage from 'public/aiports/houston.png';
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
        title: "Luxury airport car service in Houston",
        desc: 
        `   Looking for the best airport transportation service in Houston? Look no further than Bookinglane. We offer a variety of luxury car services to and from Houston's airports, including George Bush Intercontinental Airport (IAH) and William P. Hobby Airport (HOU).

            When you choose Bookinglane for your airport transportation needs, you'll enjoy a stress-free experience from start to finish. Our professional drivers will pick you up on time and get you to your destination safely and comfortably. Plus, our fleet of black cars, town cars, and private cars will make you feel like a VIP.
            
            At Bookinglane, we pride ourselves on providing the highest level of customer service. Our team is always available to answer any questions you may have and to help you book your airport transportation. And with our easy online booking system, it's never been easier to reserve your luxury car service.
        `,
        tag: "h2"
    },
    {
        title: "Black car, town car, and private car service",
        desc: 
        `   So why choose Bookinglane for your airport transportation needs in Houston? Here are just a few reasons:

            <ul style=" margin: 0; line-height: 25px ">
                <li>Professional drivers </li>
                <li>A variety of luxury car services to choose from, including black car, town car, and private car service</li>
                <li>Easy online booking system and committed customer service</li>
                <li>ECompetitive pricing and no hidden fees</li>
                <li>And much more!</li>
            </ul>
            
            Whether you're traveling for business or pleasure, trust Bookinglane to provide you with the best airport transportation service in Houston. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks.
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
					<title>Houston Airport Transportation | Bookinglane</title>
                    
					<meta
						name="description"
						content="Book reliable and comfortable airport transportation in Houston with Bookinglane. Professional drivers and a variety of vehicles to choose from"
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Houston airport transportation</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={limoServiceSanFranciscoImage}
                        alt="Luxury airport car service in Houston"
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
