import React from 'react';
import styled from 'styled-components';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import Image from 'next/image';
import { imageLoader } from 'helpers/image';

const Container = styled.div`
    display: flex;
    margin-top: 130px;
    flex-direction: column;

    ${mediaDevice['mobile']`
        margin-top: 70px;
    `}
`;

const Description = styled.p`
    display: block;
    flex: 1;
    font-weight: 400;
    font-size: ${pixelToRem(18)};
    line-height:  30px;
    white-space: pre-line;

    ${mediaDevice['mobile']`
        font-weight: 400;
        font-size: ${pixelToRem(12)};
        line-height: 19px;
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

const DescriptionBlock = styled.div`
    margin-top: 50px;
    display: flex;
    gap: 30px;

    ${mediaDevice['mobile']`
        margin-top: 15px;
        flex-direction: column;
        gap: 0;
    `}
`;

type Props = {
    image: StaticImageData,
    leftDescriptionText: string | any,
    rightDescriptionText: string | any,
    renderTitle?: any,
	imgAlt?: string,
};

const CitiesAndAirportsDescription = ({ image, imgAlt="Place image", leftDescriptionText, rightDescriptionText, renderTitle }: Props) => {

    return (
        <Container>
            {renderTitle ? renderTitle() : null}
            <StyledImage
                src={image}
                alt={imgAlt}
                loader={imageLoader}
            />
            <DescriptionBlock>
                <Description dangerouslySetInnerHTML={{__html: leftDescriptionText}} />
                <Description dangerouslySetInnerHTML={{__html: rightDescriptionText}} />
            </DescriptionBlock>
        </Container>
    );
};

export default CitiesAndAirportsDescription;