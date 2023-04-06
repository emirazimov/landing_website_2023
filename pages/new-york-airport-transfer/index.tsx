import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import limoServiceSanFranciscoImage from 'public/aiports/new-york.png';
import Image from 'next/image';
import { imageLoader } from 'helpers/image';
import colors from 'constants/colors';
import { BLACK_CARS } from 'constants/routes';

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
        title: "Reliable and convenient limo service",
        desc: 
        `   Bookinglane offers a luxurious and stress-free airport transfer experience in New York. Our limo service is designed to cater to all your transportation needs, whether you are traveling for business or leisure. With Bookinglane, you can sit back and relax, knowing that your ride to or from JFK airport is taken care of by our professional chauffeurs.
        `,
        tag: "h2"
    },
    {
        title: "Easy booking process",
        desc: 
        `   Booking a ride with us is easy and hassle-free. Our online booking system is available 24/7, and you can make a reservation in just a few clicks. You can also customize your ride according to your preferences, including the type of vehicle, luggage assistance, and other special requests.
        `,
    },
    {
        title: "Exclusive fleet of luxury sedans and black cars",
        desc: 
        `   Our fleet of luxury sedans and black cars is designed to cater to your every need. Whether you need a sedan for a solo ride or a black car for a group, we have got you covered. All our vehicles are equipped with top-of-the-line amenities, including Wi-Fi, air conditioning, and plush leather seats.
        `,
    },
    {
        title: "Professional chauffeurs with luggage assistance",
        desc: 
        `   Our professional chauffeurs are well-trained and experienced in providing the best customer service. They will greet you at the airport with a smile and assist you with your luggage. Our chauffeurs will also ensure that you reach your destination on time, whether it's a hotel, office, or any other location in New York.
        `,
    },
    {
        title: "Benefits of choosing Bookinglane",
        desc: 
        `   By choosing Bookinglane for your airport transfer needs, you can enjoy the following benefits:

            <ul style=" margin: 0; line-height: 15px ">
                <li>Reliable and on-time service</li>
                <li>Professional and courteous chauffeurs</li>
                <li>Competitive pricing</li>
                <li>Easy booking process</li>
                <li>24/7 availability</li>
                <li>Luxurious and comfortable vehicles</li>
            </ul>
            
            Experience the best airport transfer service in New York with Bookinglane. Book your ride today and enjoy a hassle-free and luxurious transportation experience.
        `,
    }
];

function newYorkAirportTransfer() {
	const windowSize = useWindowSize();
	// const image = isMobile(windowSize.width) ? toursMobile : tours;

	return (    
		<Layout>
			<>
				<Head>
					<title>Airport Transfer in New York with Bookinglane - Luxury Limo Service</title>
                    
					<meta
						name="description"
						content="Enjoy a stress-free airport transfer experience in New York with Bookinglane's easy booking process, professional chauffeurs, and exclusive fleet of luxury sedans and black cars."
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Airport transfer in New York with Bookinglane</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={limoServiceSanFranciscoImage}
                        alt="Airport transfer in New York"
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
                                <p dangerouslySetInnerHTML={{ __html: item.desc }} />
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

export default newYorkAirportTransfer;
