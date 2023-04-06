import React, { useState, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import colors from "constants/colors";
import Link from "next/link";
import { PAGE_BLOCKS } from "constants/routes";
import { mediaDevice, pixelToRem } from "helpers/responsiveUITools";
import chevronRight from "assets/chevronRight.png";
import { imageLoader } from "helpers/image";
import SectionTitle from "components/common/SectionTitle";
import { ROUTES } from "constants/routes";

const listOfServices = [
  {
    title: "Innercity and Intercity rides",
    description:
      "Your Instant solution for traveling within and between cities with professional transportation service.",
    route: ROUTES.INTER_CITY,
    color: colors.blue,
  },
  {
    title: "Special Tours",
    description:
      "Enjoy the quality of a traditional chauffeur during the wine tour, destination wedding, or any other special event.",
    route: ROUTES.TOURS,
    color: "#368D69",
  },
  {
    title: "Airport Transfers",
    description:
      "Enjoy smooth and hassle-free rides to and from airport with precise timing.",
    route: ROUTES.AIRPORT,
    color: "#4D4DE0",
  },
  {
    title: "Corporate travel",
    description:
      "Our corporate travel service provides you with a convenient and reliable way to travel in style and comfort.",
    route: ROUTES.CORPORTATE_TRAVEL,
    color: "#EE3757",
  },
];

const Container = styled.div`
  margin-top: 126px;

  ${mediaDevice["mobile"]`
        margin-top: 100px;
		height: auto;
    `}
`;

const ServiceListContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  ${mediaDevice["mobile"]`
        flex-direction: column;
    `}
`;

const ServiceContainer = styled.div`
  min-width: 400px;
  max-width: 400px;
  height: 390px;
  padding: 30px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 80px;
  border-radius: 20px;

  background-color: ${(props: { bColor: string }) => props.bColor};

  ${mediaDevice["mobile"]`
		height: auto;
        margin-top: 20px;
        min-width: 100%;
		max-width: 100%;
    `}
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Numeration = styled.span`
  font-weight: 700;
  font-size: ${pixelToRem(54)};
  line-height: 66px;
  color: #fff;
`;

const ServiceTitle = styled.span`
  margin-top: 20px;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 27px;
  color: #fff;
  max-width: 94%;

  ${mediaDevice["mobile"]`
        font-weight: 600;
        font-size: ${pixelToRem(18)};
        line-height: 22px;
    `}
`;

const ServiceDescription = styled.span`
  margin-top: 20px;
  font-weight: 500;
  font-size: ${pixelToRem(18)};
  line-height: 30px;
  color: #fff;
  flex: 1;
  max-width: 94%;

  ${mediaDevice["mobile"]`
        font-size: ${pixelToRem(14)};
        line-height: 24px;
    `}
`;

const ControlButtonsContainer = styled.div`
  display: flex;

  ${mediaDevice["mobile"]`
        display: none;
    `}
`;

const RightButton = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.ivoryWeb};
  cursor: pointer;

  & > img {
    transform: scale(1.2);
  }
`;

const LeftButton = styled(RightButton)`
  transform: rotate(180deg);
  margin-right: 10px;
`;

const ControllButtonIcon = styled(Image)`
  ${(props: { disabled: boolean }) =>
    props.disabled &&
    `
		-webkit-filter: invert(50%);
		filter: invert(50%);
	`}
`;

const ReadMoreButton = styled.button`
  width: fit-content;
  padding: 18px 50px;
  font-weight: 500;
  font-size: ${pixelToRem(16)};
  line-height: 20px;
  border: 0px;
  border-radius: 30px;
  color: ${colors.blue};
  background: white;
  cursor: pointer;

  ${mediaDevice["mobile"]`
		margin-top: 40px;
        font-size: ${pixelToRem(12)};
        line-height: 15px;
        padding: 11px 26px;
    `}
`;

const ServiceItem = ({
  color,
  title,
  description,
  route,
  number,
}: {
  color: string;
  title: string;
  description: string;
  route: string;
  number: string;
}) => (
  <ServiceContainer bColor={color}>
    <Numeration>{number}</Numeration>
    <ServiceTitle>{title}</ServiceTitle>
    <ServiceDescription>{description}</ServiceDescription>
    <Link href={route}>
      <ReadMoreButton>Read more</ReadMoreButton>
    </Link>
  </ServiceContainer>
);

const CARD_WIDTH = 400;

const ServicesSection = () => {
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  const scrollRef: any = useRef(null);

  const scrollCheck = () => {
    setscrollX(scrollRef.current.scrollLeft);
    if (
      Math.floor(
        scrollRef.current.scrollWidth - scrollRef.current.scrollLeft
      ) <= scrollRef.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += CARD_WIDTH;
    scrollCheck();
  };

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= CARD_WIDTH;

    scrollCheck();
  };

  function renderControllButtons() {
    return (
      <ControlButtonsContainer>
        <LeftButton onClick={scrollLeft}>
          <ControllButtonIcon
            disabled={scrollX === 0}
            loader={imageLoader}
            height={8}
            src={chevronRight}
            alt="Increase month button"
          />
        </LeftButton>
        <RightButton onClick={scrollRight}>
          <ControllButtonIcon
            disabled={scrolEnd}
            loader={imageLoader}
            height={8}
            src={chevronRight}
            alt="Increase month button"
          />
        </RightButton>
      </ControlButtonsContainer>
    );
  }

  return (
    <Container id={PAGE_BLOCKS.SERVICES}>
      <Row>
        <SectionTitle>Our services</SectionTitle>
        {renderControllButtons()}
      </Row>
      <ServiceListContainer ref={scrollRef} onScroll={scrollCheck}>
        {listOfServices.map((item, index) => (
          <ServiceItem
            key={item.title}
            number={`0${index + 1}`}
            color={item.color}
            title={item.title}
            description={item.description}
            route={item.route}
          />
        ))}
      </ServiceListContainer>
    </Container>
  );
};

export default ServicesSection;
