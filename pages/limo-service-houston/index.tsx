import Layout from "components/layout";
import styled from "styled-components";
import BookingSection from "components/common/booking";
import Head from "next/head";
import ContactUs from "components/common/ContactUs";
import Partners from "components/common/Partners";
import { isMobile, mediaDevice, pixelToRem } from "helpers/responsiveUITools";
import useWindowSize from "components/hooks/useWindowSize";
import PageTitle from "components/common/PageTitle";
import limoServiceSanFranciscoImage from "public/limo-services/houston.png";
import Image from "next/image";
import { imageLoader } from "helpers/image";
import { BLACK_CARS, CARS, HOUSTON } from "constants/routes";
import colors from "constants/colors";

const Container = styled.div`
  flex: 1;
`;

const ContainerContent = styled.div`
  width: 80%;
  margin: 0 auto;

  ${mediaDevice["mobile"]`
        width: 100%;
    `}
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  margin-top: 145px;

  ${mediaDevice["mobile"]`
        margin-top: 35px;
    `}
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  white-space: pre-line;
  width: 100%;
  margin-bottom: ${pixelToRem(50)};
  margin-top: 50px;

  h2,
  h3 {
    font-size: 18px;
    line-height: 30px;
    margin: 0;
    padding: 0;
  }

  ${mediaDevice["mobile"]`
        font-weight: 400;
        font-size: ${pixelToRem(12)};
        line-height: 19px;
    `}
`;

const descriptionText = [
  {
    title: "Discover the best of Houston with Bookinglane",
    desc: `   Welcome to Houston – a vibrant city that offers a unique blend of southern charm and modern sophistication. As one of the largest cities in the United States, Houston is home to many exciting attractions, world-renowned museums, and excellent dining and shopping options. Whether you are here for business or leisure, Bookinglane can help make your visit to Houston unforgettable with our premium <a style="color: ${colors.blue};font-weight: 500;" href="/${HOUSTON.TRANSPORTATION}">transportation services.<a/>

            At Bookinglane, we are committed to providing our clients with the highest quality limo service and transportation solutions. Our experienced and professional drivers are knowledgeable about the city and can take you to all of the top tourist destinations and hidden gems. With our <a style="color: ${colors.blue};font-weight: 500;" href="/${HOUSTON.AIRPORT}">airport transportation</a> services, you can rest assured that you will arrive at your destination on time and in style.
            
            Whether you need a <a style="color: ${colors.blue};font-weight: 500;" href="/${HOUSTON.TOWN}">town car service</a>, <a style="color: ${colors.blue};font-weight: 500;" href="/${HOUSTON.BLACK}">black car service</a>, chauffeur service or <a style="color: ${colors.blue};font-weight: 500;" href="/${HOUSTON.LUXURY}">luxury car service</a>, Bookinglane has you covered. Our fleet of well-maintained vehicles includes the latest models and is equipped with top-of-the-line amenities to ensure your comfort and safety. Our <a style="color: ${colors.blue};font-weight: 500;" href="/${HOUSTON.PRIVATE}">private car service</a> is perfect for those who value privacy and convenience.
        `,
    tag: "h2",
  },
  {
    title: "Benefits of choosing Bookinglane",
    desc: `   As a trusted provider of <a style="color: ${colors.blue};font-weight: 500;" href="/${HOUSTON.LIMO_RENTAL}">limousine rental</a> and transportation services in Houston, Bookinglane offers a range of benefits to our clients. Here are just a few reasons why you should choose us for your transportation needs:

            <b>Affordable rates</b>: We offer competitive pricing for all of our services, so you can enjoy luxury transportation without breaking the bank.
            <b>Easy booking process</b>: Our online booking system is user-friendly and available 24/7, making it easy to reserve your ride in advance.
            <b>Reliable and on-time service</b>: Our drivers are punctual and will get you to your destination on time, every time.
            <b>Exceptional customer service</b>: We strive to provide a personalized and attentive service to each of our clients, ensuring that you feel valued and taken care of.
            <b>Customizable options</b>: Whether you need <a style="color: ${colors.blue};font-weight: 500;" href="/${HOUSTON.CAR_SERVICE}">airport transportation</a>, a wedding limo, or a night out on the town, we can customize our services to meet your specific needs.
            
            At Bookinglane, we are passionate about delivering the best transportation experience for our clients. Whether you are here for business or pleasure, let us help you discover the best of Houston in style and comfort. With Bookinglane, you can find and book an executive car service in the area in a matter of a few clicks.
        `,
    tag: "h3",
  },
];

function limoServiceSanFrancisco() {
  const windowSize = useWindowSize();
  // const image = isMobile(windowSize.width) ? toursMobile : tours;

  return (
    <Layout>
      <>
        <Head>
          <title>Houston Limo Service | Bookinglane</title>

          <meta
            name="description"
            content="Experience luxury limo service in Houston with Bookinglane. Professional drivers and a variety of stylish and comfortable vehicles to choose from."
            key="desc"
          />
        </Head>
        <Container>
          <PageTitle.h1>Houston limo service</PageTitle.h1>
          <BookingSection />

          <StyledImage
            src={limoServiceSanFranciscoImage}
            alt="Premium Houston limo service"
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
