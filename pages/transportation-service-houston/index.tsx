import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import limoServiceNapaValleyImage from 'public/transportation/houston.png';
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
        title: "Reliable and safe transportation services in Houston",
        desc: 
        `   If you're looking for reliable and safe transportation services in Houston, look no further than Bookinglane. As a premier transportation company, we pride ourselves on providing top-notch services to our clients.

            One of the biggest advantages of using Bookinglane is our easy booking process. With just a few clicks, you can book your transportation services online, saving you time and hassle. We also offer a wide variety of services, including airport transportation, limousine rental, town car service, black car service, and chauffeur service, to meet all of your transportation needs.
        `,
        tag: "h2"
    },
    {
        title: "Book your transportation with ease",
        desc: 
        `   At Bookinglane, we understand that safety is of the utmost importance. That's why all of our vehicles are regularly maintained and serviced to ensure that they're in top condition. Our drivers are also highly trained and experienced, providing you with a safe and comfortable ride every time.

            When you choose Bookinglane for your transportation services in Houston, you can rest assured that you're getting the best possible service. Contact us today to book your transportation with ease and enjoy the many benefits of our top-notch services. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks.
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
					<title>Houston Transportation Services | Easy Booking | Bookinglane</title>
					<meta
						name="description"
						content="Need reliable transportation in Houston? Book with Bookinglane for safe, comfortable, and convenient transportation services."
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Houston transportation services</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={limoServiceNapaValleyImage}
                        alt="Houston transportation services"
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
