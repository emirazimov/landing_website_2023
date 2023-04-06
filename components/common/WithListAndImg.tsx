import styled from 'styled-components';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import Image from 'next/image';
import { imageLoader } from 'helpers/image';
import { FC } from 'react';

const Container = styled.div`
    display: flex;
    margin-top: 130px;
    flex-direction: column;

    ${mediaDevice['mobile']`
        margin-top: 70px;
    `}
`;

const Description = styled.span`
    display: block;
    font-weight: 400;
    font-size: 18px;
    line-height:  30px;
    white-space: pre-line;
    width: 100%;

    ${mediaDevice['mobile']`
        font-weight: 400;
        font-size: ${pixelToRem(12)};
        line-height: 19px;
    `}
`;


const ListBlock = styled.div`
    width: 100%;
    font-weight: 400;
    font-size: 18px;
    line-height:  30px;
    white-space: pre-line;
    display: flex;
    justify-content: space-between;

    ul {
        padding-left: 1em;
        margin-block-start: 0;
    }
    

    ${mediaDevice['mobile']`
        font-weight: 400;
        font-size: ${pixelToRem(12)};
        line-height: 19px;

        ul {
            padding-left: 16px;
        }
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
    display: grid;
    grid-template-columns: 35% 60%;
    grid-gap: 5%;

    ${mediaDevice['mobile']`
        margin-top: 15px;
        flex-direction: column;
        grid-template-columns: 1fr;
        grid-gap: 0;
    `}
`;  

interface WithListAndImgProps {
    image: StaticImageData,
    imgAlt: string,
    leftDescriptionText: string,
    rightDescriptionList: Record<number, string[]>,
    renderDescriptionTitle: () => JSX.Element
}

const WithListAndImg: FC<WithListAndImgProps> = ({ image, imgAlt, leftDescriptionText, rightDescriptionList, renderDescriptionTitle }) => {
    return (
        <Container>
            {renderDescriptionTitle()}
            <StyledImage
                src={image}
                alt={imgAlt}
                loader={imageLoader}
            />
            <DescriptionBlock>
                <Description>
                    {leftDescriptionText}
                </Description>
                <ListBlock>
                    {Object.values(rightDescriptionList).map((item: string[], idx: number) => {

                        return (
                            <ul key={idx}>
                                {item.map((li, ldx) => (
                                    <li key={ldx}>{li}</li>
                                ))}
                            </ul>
                        )
                    })}  
                </ListBlock>                    
            </DescriptionBlock>
        </Container>
    )
}

export default WithListAndImg;