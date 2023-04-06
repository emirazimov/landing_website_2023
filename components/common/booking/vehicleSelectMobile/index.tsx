import React from "react";
import Image from "next/image";
import styled from "styled-components";
import colors from "constants/colors";
import { imageLoader } from "helpers/image";
import { NumericFormat } from "react-number-format";
import { mediaDevice, pixelToRem } from "helpers/responsiveUITools";
import { BOOKING_STEPS } from "constants/booking";

import style from "./vehicleSelectMobile.module.css";
import { IVehicleType } from "../../../../vehicles";

const Container = styled.div`
  display: none;
  margin-top: 30px;
  flex-direction: column;

  ${mediaDevice["smallScreen"]`
        display: flex;  
    `}
`;

const VehicleItemContainer = styled.div`
  width: 100%;
  height: 90px;
  flex: auto;
  padding: 22px 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MainDetailContainer = styled.div`
  flex: 1;
  justify-content: flex-start;
  display: flex;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: ${pixelToRem(12)};
  line-height: 15px;
`;

const Price = styled.span`
  display: block;
  font-weight: 600;
  font-size: ${pixelToRem(12)};
  line-height: 15px;
  text-align: right;
`;

const Capatity = styled.span`
  display: block;
  margin-top: 2px;
  font-weight: 400;
  font-size: ${pixelToRem(10)};
  line-height: 12px;
`;

const SimilarIndicator = styled.span`
  width: fit-content;
  display: block;
  padding: 3px 11px;
  margin-top: 4px;
  font-weight: 500;
  font-size: ${pixelToRem(8)};
  line-height: 10px;
  color: ${colors.blue};

  border: 1px solid ${colors.blue};
  border-radius: 10px;
`;

const VehicleImage = styled(Image)`
  width: 111px;
  height: fit-content;
`;

type Props = {
  vehicleList: IVehicleType[];
  selectedVehicleType: null | string;
  setSelectedVehicleType: (string) => void;
  renderControllButtons: (index: number) => JSX.Element;
};

const MobileVehicleTypeSelect = ({
  vehicleList,
  selectedVehicleType,
  setSelectedVehicleType,
  renderControllButtons,
}: Props) => {
  function handleVeicleSelect(vehicleId: string) {
    setSelectedVehicleType(vehicleId);
  }

  const handleClick = (type) => {
    handleVeicleSelect(type);
    window?.dataLayer.push({ event: type });
  };

  return (
    <Container>
      {vehicleList.map((vehicle) => {
        const classes =
          selectedVehicleType === vehicle.type
            ? `${style.vehicleTypeContainer} ${style.scaledOut}`
            : style.vehicleTypeContainer;

        return (
          <VehicleItemContainer
            className={classes}
            onClick={() => handleClick(vehicle.type)}
            key={vehicle.id}
          >
            <MainDetailContainer>
              <VehicleImage
                loader={imageLoader}
                src={vehicle.image}
                alt="Vehicle image"
              />
              <Detail>
                <Title>{vehicle.type}</Title>
                <Capatity>{`Capacity: ${vehicle.capacity}`}</Capatity>
                <SimilarIndicator>or similar</SimilarIndicator>
              </Detail>
            </MainDetailContainer>
            <NumericFormat
              value={vehicle.price.toFixed(2)}
              thousandSeparator=","
              displayType="text"
              renderText={(value) => <Price>EST ${value}</Price>}
            />
          </VehicleItemContainer>
        );
      })}

      {renderControllButtons(BOOKING_STEPS.SELECT_VEHICLE)}
    </Container>
  );
};

export default MobileVehicleTypeSelect;
