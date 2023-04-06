import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { mediaDevice } from 'helpers/responsiveUITools';
import { imageLoader } from 'helpers/image';


const Container = styled.div`
    margin-top: 100px;
    display: flex;

    ${mediaDevice['mobile']`
        margin-top: 40px;
        flex-direction: column;
    `}
`;

const StyledImage = styled(Image)`
    width: 45%;
    height: fit-content;
    margin-right: 80px;

    ${mediaDevice['mobile']`
        width: 100%;
        margin-right: 0px;
    `}
`;

const Description = styled.p`
    flex: 1;
    display: block;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    margin-block-start: 0;
    margin-block-end: 0;

    ${mediaDevice['mobile']`
        margin-top: 20px;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
    `}
`;

type Props = {
    image: StaticImageData,
    text: string,
};


const ServiceInfo = ({ image, text }: Props) => (
    <Container>
        <StyledImage
            loader={imageLoader}
            src={image}
            alt="Special tours"
        />
        <Description>
            {text}
        </Description>
    </Container>
);

export default ServiceInfo;