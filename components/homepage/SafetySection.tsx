import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SectionTitle from 'components/common/SectionTitle';
import safe from 'public/safetyItems/safe.png';
import privatly from 'public/safetyItems/private.png';
import charitable from 'public/safetyItems/charitable.png';
import Image from 'next/image';
import { imageLoader } from 'helpers/image';
import { PAGE_BLOCKS } from 'constants/routes';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import colors from 'constants/colors';

const listOfSafetyItems = [
    {
        image: safe,
        title: 'Safety First',
        description: 'Your safety is paramount to us. We apply the highest health and cleaning standards to provide safe environment during your ride.',
    },
    {
        image: privatly,
        title: 'Private Transportation Solutions',
        description: 'Long-distance rides, one way or return, by the hour, airport transfers, and more - discover a broad range of one-stop travel.',
    },
    {
        image: charitable,
        title: 'Charitable Travel',
        description: 'Ride for pleasure or business with additional cause. Become a part of our Global Charitable Initiative - we donate a portion of our bookings to various charitable causes.',
    }
];

const Container = styled.div`
    margin-top: 126px;

    ${mediaDevice['mobile']`
        margin-top: 100px;
    `}
`;

const VideoPlayerContainer = styled.div`
    margin-top: 80px;
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;

    ${mediaDevice['mobile']`
        margin-top: 30px;
    `}
`;

const VideoPlayer = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const BeforeMountVideo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Description = styled.p`
    display: block;
    align-self: center;
    padding: 0% 10%;
    margin-top: 80px;
    font-style: italic;
    font-weight: 400;
    font-size: ${pixelToRem(18)};
    line-height: 30px;
    text-align: center;

    ${mediaDevice['mobile']`
        margin-top: 20px;
        text-align: inherit;
        font-size: ${pixelToRem(12)};
        line-height: 18px;
        padding: 0px;
        align-self: left;
    `}
`;

const SafetyItemListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 100px;

    ${mediaDevice['mobile']`
        margin-top: 70px;
        flex-direction: column;
    `}
`;

const SafetyItemContainer = styled.div`
    width: 32%;
	padding: 40px;
	padding-bottom: 60px;
    display: flex;
    flex-direction: column;
	justify-content: space-between;
    align-items: flex-start;
	background: #FFFFFF;
	box-shadow: 0px 4px 20px #E1E6EA;
	border-radius: 20px;

    ${mediaDevice['mobile']`
        width: 100%;
        margin-top: 30px;
		padding: 30px;
		padding-bottom: 30px;
    `}
`;

const StyledImage = styled(Image)`
    ${mediaDevice['mobile']`
        width: 40px;
        height: 40px;
        margin-right: 10px;
    `}
`;

const Title = styled.span`
	margin-left: 20px;
    display: block;
    font-weight: 700;
    font-size: ${pixelToRem(23)};
    line-height: 28px;

    ${mediaDevice['mobile']`
		margin-left: 10px;
        margin-top: 0px;
        font-weight: 600;
        font-size: ${pixelToRem(20)};
        line-height: 20px;
    `}
`;

const Row = styled.div`
	display: flex;
	align-items: center;
`;

const SafetyDescription = styled.span`
	margin-top: 24px;
    display: block;
    font-weight: 400;
    font-size: ${pixelToRem(18)};
    line-height: 30px;

    ${mediaDevice['mobile']`
		margin-top: 18px;
		max-width: 92%;
        font-weight: 400;
        font-size: ${pixelToRem(15)};
        line-height: 20px;
    `}
`;

const SafetyItem = ({ image, title, description }: { image: StaticImageData, title: string, description: string }) => (
    <SafetyItemContainer>
		<Row>
			<StyledImage loader={imageLoader} src={image} alt={title} />
			<Title>{title}</Title>
		</Row>
        <SafetyDescription>{description}</SafetyDescription>
    </SafetyItemContainer>
);

const SafetySection = () => {
    const [video, setVideo] = useState<JSX.Element | null>();

    useEffect(() => {
        setVideo(
            <>
                <VideoPlayer
                    src="https://www.youtube.com/embed/VXpDQe7BWA4?rel=0"
                    title="Bookinglane video"
                >
                </VideoPlayer>
            </>
        );
    }, []);

    return (
        <Container id={PAGE_BLOCKS.SAFETY}>
            <SectionTitle>Safety</SectionTitle>
            <VideoPlayerContainer style={{ background: colors.lightGray }}>
                {video}
            </VideoPlayerContainer>
            <Description>
                Executive limousines provide a safe transport experience, but with the recent push for hygiene and safety, Bookinglane is taking disinfection even further. In response to the growing demand, Bookinglane now employs a unique disinfectant spray that is both effective and environmentally friendly. The spray utilizes non-toxic solutions that fully disinfect limos without leaving behind strong odors or any chemicals. This allows customers to feel even safer as they travel in their limo. Along with fully disinfected limos, we take all necessary precautions to ensure the safety and comfort of our customers, thus making limousine rides the ideal transportation option for anyone looking for a worry-free journey.
            </Description>
            <SafetyItemListContainer>
                {listOfSafetyItems.map((safetyItem) => (
                    <SafetyItem
                        key={safetyItem.title}
                        image={safetyItem.image}
                        title={safetyItem.title}
                        description={safetyItem.description}
                    />
                ))}
            </SafetyItemListContainer>
        </Container>
    );
};

export default SafetySection;