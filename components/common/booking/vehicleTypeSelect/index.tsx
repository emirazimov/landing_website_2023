import React, { use, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import style from "./vehicleTypeSelect.module.css";
import colors from "constants/colors";
import { imageLoader } from "helpers/image";
import { NumericFormat } from "react-number-format";
import { mediaDevice, pixelToRem } from "helpers/responsiveUITools";
import { IVehicleType } from "../../../../vehicles";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  justify-content: space-between;
  align-items: space-between;

  ${mediaDevice["smallScreen"]`
        display: none;  
    `}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: ${pixelToRem(22)};
  line-height: 27px;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: ${pixelToRem(22)};
  line-height: 27px;
  text-align: right;
`;

const EstLabel = styled.span`
  font-weight: 600;
  font-size: ${pixelToRem(18)};
  line-height: 22px;
`;

const Capatity = styled.span`
  display: block;
  margin-top: 4px;
  font-weight: 400;
  font-size: ${pixelToRem(14)};
  line-height: 17px;
  color: ${colors.gray};
`;

const SimilarIndicator = styled.span`
  width: fit-content;
  display: block;
  padding: 4px 16px;
  margin-top: 6px;
  font-weight: 500;
  font-size: ${pixelToRem(10)};
  line-height: 12px;
  border: 1px solid ${colors.blue};
  border-radius: 10px;
  color: ${colors.blue};
`;

const VehicleImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: end;
  justify-content: center;
`;

const VehicleImage = styled(Image)`
  width: auto;
`;

type Props = {
  vehicleList: IVehicleType[];
  selectedVehicleType: null | string;
  setSelectedVehicleType: (string) => void;
};

const VehicleTypeSelect = ({
  vehicleList,
  selectedVehicleType,
  setSelectedVehicleType,
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
          <div
            className={classes}
            onClick={() => handleClick(vehicle.type)}
            key={vehicle.id}
          >
            <Header>
              <div>
                <Title>{vehicle.type}</Title>

                <Capatity>{`Capacity: ${vehicle.capacity}`}</Capatity>
                <SimilarIndicator>or similar</SimilarIndicator>
              </div>
              <NumericFormat
                value={vehicle.price.toFixed(2)}
                thousandSeparator=","
                displayType="text"
                renderText={(value) => (
                  <Price>
                    <EstLabel>EST</EstLabel>
                    <br />${value}
                  </Price>
                )}
              />
            </Header>

            <VehicleImageContainer>
              <VehicleImage
                loader={imageLoader}
                src={vehicle.image}
                alt="Vehicle image"
              />
            </VehicleImageContainer>
          </div>
        );
      })}
    </Container>
  );
};

export default VehicleTypeSelect;
