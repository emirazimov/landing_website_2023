import Layout from 'components/layout';
import styled from 'styled-components';

import BookingSection from 'components/common/booking';
import ContactUs from 'components/common/ContactUs';
import Partners from 'components/common/Partners';
import corpTravelMain from 'public/service-pages/corp-travel-one.png';
import corpTravelTwo from 'public/service-pages/corp-travel-two.png';
import Head from 'next/head';
import corpTravelThree from 'public/service-pages/corp-travel-three.png';
import PageTitle from 'components/common/PageTitle';
import { isMobile, mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import Image from 'next/image';
import { imageLoader } from 'helpers/image';
import colors from 'constants/colors';
import useWindowSize from 'components/hooks/useWindowSize';

const Container = styled.div`
	flex: 1;
`;

const prosList = [
	{
		title: "Efficiency with the latest technology",
		description: "Bookinglane understands the importance of efficiency and professionalism when it comes to corporate travel. That's why we offer a wide range of limo services, including airport transfers, city tours, and inner-city rides. Our professional chauffeurs are experienced and equipped with the latest technology to make your journey as smooth as possible.",
	},
	{
		title: "Safety",
		description: "Safety is always a top priority at Bookinglane. Our chauffeurs are background checked, and our vehicles are equipped with the latest safety features. You can rest assured that you will be in safe hands with us.",
	},
	{
		title: "Reliability",
		description: "Reliability is at the core of what we do at Bookinglane. Our leading automated technology ensures that you can book your travel quickly and easily. Our chauffeurs are always on time, and our vehicles are well-maintained, so you can be sure that your travel plans will go off without a hitch.",
	},
	{
		title: "Comfort",
		description: "Comfort is also a crucial factor in corporate travel. That's the reason why we offer luxury sedans, limos and SUVs, equipped with the latest technology and amenities. Whether you are traveling to a business meeting or a conference, you can travel in comfort with a professional chauffeur.",
	},
	{
		title: "Privacy",
		description: "We understand that privacy is essential for business travel. Thus, we guarantee complete privacy and confidentiality when you travel with us. You can conduct your business in peace, knowing that your information is safe and secure.",
	},
	{
		title: "Flexibility",
		description: "By contacting our customer support, ou can make changes to your travel plans at any time. You can also customize your travel experience to meet your specific needs.",
	},
	{
		title: "Cost effectiveness",
		description: "Traveling for business doesn't have to be expensive. With Bookinglane, you can enjoy a cost-effective solution that offers luxury, comfort, and reliability at an affordable price.",
	}
];

const MainInfoContainer = styled.div`
	margin-top: 100px;
	display: flex;

	${mediaDevice['mobile']`
		margin-top: 40px;
		flex-direction: column;
	`}
`;

const MainImage = styled(Image)`
    width: 50%;
    height: fit-content;
    margin-right: 40px;

    ${mediaDevice['mobile']`
        width: 100%;
        margin-right: 0px;
    `}
`;

const MainDescription = styled.span`
    flex: 1;
    display: block;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;

    ${mediaDevice['mobile']`
        margin-top: 20px;
        font-weight: 400;
        font-size: ${pixelToRem(12)};
        line-height: 19px;
    `}
`;

const HeaderText = styled.span`
	margin-top: 80px;
	font-weight: 400;
	font-size: 18px;
	line-height: 30px;
	display: block;

	${mediaDevice['mobile']`
        margin-top: 20px;
        font-weight: 400;
        font-size: ${pixelToRem(12)};
        line-height: 19px;
    `}
`;

const ProContainer = styled.div`
	margin-top: 80px;
	margin-left: 200px;

	${mediaDevice['mobile']`
        margin-top: 40px;
        margin-left: 0px;
    `}
`;

const FooterText = styled(HeaderText)`
	margin-top: 80px;
`;

const Row = styled.div`
	display: flex;
	align-items: center;
`;

const Dot = styled.div`
	height: 20px;
	width: 20px;
	margin-right: 30px;
	border-radius: 50%;
	background-color: ${colors.blue};

	${mediaDevice['mobile']`
        height: 10px;
		width: 10px;
		margin-right: 10px;
    `}
`;

const Title = styled.span`
	font-weight: 700;
	font-size: 23px;
	line-height: 28px;
	display: block;

	${mediaDevice['mobile']`
		font-size: 16px;
		line-height: 20px;
    `}
`;

const Description = styled(HeaderText)`
	margin-top: 20px;
	margin-left: 50px;
	display: block;

	${mediaDevice['mobile']`
		margin-top: 10px;
		margin-left: 20px;
    `}
`;

const GappedRow = styled.div`
	margin-top: 170px;
	display: flex;
	gap: 40px;

	${mediaDevice['mobile']`
		margin-top: 100px;
		gap: 0px;
		flex-direction: column;
    `}
`;

const FooterBlock = styled.div``;

const FooterblockImage = styled(Image)`
	width: 550px;
	height: auto;

	${mediaDevice['mobile']`
		width: 100%;
    `}
`;

const FooterBlockTitle = styled(Title)`
	margin-top: 40px;

	${mediaDevice['mobile']`
		margin-top: 24px;
    `}
`;

const FooterBlockDescription = styled(HeaderText)`
	margin-top: 20px;

	${mediaDevice['mobile']`
		margin-top: 10px;
    `}
`;

function CorporateTravel() {
	const windowSize = useWindowSize();

	function renderPros() {
		return prosList.map(({ title, description }) => (
			<ProContainer key={title}>
				<Row>
					<Dot />
					<Title>{title}</Title>
				</Row>
				<Description>{description}</Description>
			</ProContainer>
		));
	}

	return (
		<Layout>
			<>
				<Head>
					<title>Corporate Travel Service | Book Reliable Limousine Service - Bookinglane</title>

					<meta
						name="description"
						content="Streamline your corporate travel with Bookinglane's reliable limo service and professional chauffeurs. Arrive in style and comfort. Book now."
						key="desc"
					/>
				</Head>
				<Container>
					<PageTitle.h1>Book executive car & chauffeur service for corporate travel</PageTitle.h1>
					<BookingSection />
					<PageTitle.h1 style={{ paddingTop: 130 }}>Traveling for business?</PageTitle.h1>

					<MainInfoContainer>
						<MainImage
							loader={imageLoader}
							src={corpTravelMain}
							alt="Traveling for business can be stressful and time-consuming, but with Bookinglane, you can make it a breeze."
							
						/>
						<MainDescription>
							Bookinglane is a leading corporate travel management company that offers executive car and chauffeur services both locally and nationwide. Our service is specifically designed to cater to any unique needs requiring reliable and efficient transportation to and from any destination. With a fleet of luxury vehicles and experienced drivers, Bookinglane ensures that you arrive at your desired destination on time and in style. Our service is available 24/7, so you can rest assured that you have a reliable transportation service at any time of the day or night.
							With our personalized support, advanced technology, and attention to detail, you can fully focus on your work while leaving your travel arrangements in the hands of our technology experts.
						</MainDescription>
					</MainInfoContainer>

					<PageTitle.h2 style={{ marginTop: "130px" }}>Streamline your business travel with{isMobile(windowSize.width) ? <br/> : null} Bookinglane’s corporate travel service</PageTitle.h2>
					<HeaderText>
						Traveling for business can be stressful and time-consuming, but with Bookinglane, you can make it a breeze. Our corporate travel service provides you with a convenient and reliable way to travel in style and comfort. Our limo service and professional chauffeur will ensure that you arrive at your destination safely, on time, and in a luxurious vehicle.
					</HeaderText>
					{renderPros()}
					<FooterText>
					Choosing Bookinglane for your corporate travel needs is a smart decision. With our convenient, professional, safe, reliable, private,  and cost-effective services, you can travel with confidence, knowing that you are in good hands. Moreover, Bookinglane platform offers an instant booking  of an executive car service with upfront pricing. It literally just takes a few clicks! 
					</FooterText>
					<GappedRow>
						<FooterBlock>
							<FooterblockImage
								alt="Bookinglane's executive car and chauffeur service provides transportation to and from a variety of private jet terminals"
								src={corpTravelTwo}
								loader={imageLoader}
								
							/>
							<FooterBlockTitle>Private jet transportation</FooterBlockTitle>
							<FooterBlockDescription>
								Bookinglane's executive car and chauffeur service provides transportation to and from a variety of private jet terminals, including JSX, Signature, and more. With a fleet of luxury vehicles and experienced drivers, Bookinglane ensures that business travelers arrive at their destination on time and with comfort.
							</FooterBlockDescription>
						</FooterBlock>
						<FooterBlock>
							<FooterblockImage
								alt="Private transportation solution"
								src={corpTravelThree}
								loader={imageLoader}
								
							/>
							<FooterBlockTitle>Private transportation solution</FooterBlockTitle>
							<FooterBlockDescription>
								One of the many advantages of Bookinglane's executive car and chauffeur service is the opportunity for long-term relationships with businesses and their employees. This allows Bookinglane to get to know the unique needs and preferences of each traveler, which in turn leads to a more personalized and efficient travel experience.
							</FooterBlockDescription>
						</FooterBlock>
					</GappedRow>
					<ContactUs />
					<Partners />
				</Container>
			</>
		</Layout>
	);
}

export default CorporateTravel;
