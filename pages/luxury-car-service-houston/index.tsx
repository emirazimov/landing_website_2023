import Layout from 'components/layout';
import styled from 'styled-components';
import BookingSection from 'components/common/booking';
import Head from 'next/head';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import PageTitle from 'components/common/PageTitle';
import carServiceSanFranciscoImage from 'public/car-services/luxuru.png';
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
        font-size: 23px;
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
        title: "Experience the ultimate in luxury with Bookinglane car service",
        desc: `At Bookinglane, we understand that traveling in style and comfort is important to our clients. That's why we offer a luxury car service in Houston that exceeds expectations. Our fleet of high-end vehicles, including limousines and black cars, are meticulously maintained and provide the ultimate in luxury transportation.

        We are proud to offer airport transportation, limousine rental, town car service, and chauffeur service to our clients. Our team of professional drivers are experienced, courteous, and dedicated to ensuring that our clients arrive at their destination safely and on time.`,
        tag: "h2"
    },
    {
        title: "Why choose Bookinglane for your luxury car service needs?",
        desc: 
        `  Bookinglane is committed to providing exceptional service at competitive prices. Our luxury car service is the perfect choice for special events, business travel, and more. Whether you need transportation to the airport, a corporate event, or a night out on the town, Bookinglane is here to provide you with the ultimate in luxury transportation.

            Experience the convenience and luxury of Bookinglane's car service today. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks.
        `,
        tag: "h3"
    },
];

function carServiceSanFrancisco() {
	const windowSize = useWindowSize();

	return (    
		<Layout>
			<>
				<Head>
                    <title>Luxury Car Service in Houston | Bookinglane</title>
					<meta
						name="description"
						content="Experience the ultimate in luxury with Bookinglane's luxury car service in Houston. Professional chauffeurs, stylish vehicles, and easy booking."
						key="desc"  
					/>
				</Head>
				<Container>
					<PageTitle.h1>Luxury car service in Houston</PageTitle.h1>
					<BookingSection />
                    
                    <StyledImage
                        src={carServiceSanFranciscoImage}
                        alt="Luxury car service in Houston"
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

export default carServiceSanFrancisco;
