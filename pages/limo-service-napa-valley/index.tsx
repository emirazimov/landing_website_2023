import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import limoServiceNapaValleyImage from 'public/limo-services/limo-service-napa-valley.png';
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
        title: "Experience luxury transportation with Bookinglane in Napa Valley",
        desc: 
        `   If you're planning a trip to Napa Valley, there's no better way to explore the scenic wine country than with Bookinglane's limo service. Our professional and reliable service ensures that you can sit back, relax, and enjoy the stunning views and world-renowned wineries without worrying about transportation logistics.

            Bookinglane's luxury sedan and <a style="color: ${colors.blue};font-weight: 500;" href="/${BLACK_CARS.NAPA_VALLEY}">black car</a> service provide a comfortable and stylish way to travel. Our experienced drivers know the area well and can take you on a tour of the best wineries in Napa Valley. Whether you're planning a romantic getaway or a fun-filled day with friends, our limo service can cater to your needs.
        `,
        tag: "h2"
    },
    {
        title: "Enjoy a safe and comfortable ride with Bookinglane’s limo service",
        desc: 
        `   Safety is our top priority, and we take every measure to ensure that our clients have a safe and enjoyable ride. Our vehicles are regularly maintained to ensure that they are in top condition, and our drivers are professional and fully licensed.

            Bookinglane's limo service is also ideal for business travel, airport transfers, and corporate events. Our reliable and efficient service allows you to focus on your work without worrying about transportation. We offer inner-city and inter-city rides, and our flexible scheduling means that we can cater to your specific travel needs.
            
            One of the best things about Napa Valley is the breathtaking scenery, and our limo service allows you to take it all in. You can sit back, relax, and enjoy the view, while we take care of the driving. With Bookinglane, you can make the most of your time in Napa Valley, and discover the best that wine country has to offer.
            
            Book your ride with Bookinglane today and experience the comfort, safety, and style of our limo service. Our competitive pricing ensures that you get the best value for your money, and our user-friendly platform makes it easy to book your ride in just a few clicks.
        `,
    }
];

function limoServiceNapaValley() {
	const windowSize = useWindowSize();

	return (    
		<Layout>
			<>
				<Head>
					<title>Luxury Limo Service in Napa Valley | Book Your Ride with Bookinglane</title>
					<meta
						name="description"
						content="Discover the best way to explore wine country with Bookinglane's limo service in Napa Valley. Sit back, relax, and enjoy the scenic views and world-renowned wineries without worrying about transportation logistics. Book your ride today."
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Limo service in Napa Valley: Discover the best way to explore wine country</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={limoServiceNapaValleyImage}
                        alt="Limo service in Napa Valley"
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
