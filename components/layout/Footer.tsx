import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { imageLoader } from 'helpers/image';

import logoPic from 'public/logo.png';
import facebookIcon from 'public/social-networks/facebook.png';
import instagramIcon from 'public/social-networks/instagram.png';
import twitterIcon from 'public/social-networks/twitter.png';
import linkedinIcon from 'public/social-networks/linkedin.png';
import Link from 'next/link';
import { mediaDevice } from 'helpers/responsiveUITools';
import colors from 'constants/colors';
import { ROUTES, PAGE_BLOCKS, SOCIAL_NETWORKS } from 'constants/routes';

const Container = styled.div`
    width: 100%;
    height: 210px;
    display: flex;
    background-color: ${colors.darkBlue};

    ${mediaDevice['smallScreen']`
        height: 110px;
  	`};
`;

const Content = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 55px 0px 46px 0px;

    ${mediaDevice['smallScreen']`
        justify-content: center;
  	`};
`;

const LogoLinksContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    ${mediaDevice['smallScreen']`
		display: none;
  	`};
`;

const SocialNetworksAndRights = styled(LogoLinksContainer)`
    ${mediaDevice['smallScreen']`
		display: flex;
        flex-direction: column-reverse;
        align-items: center;
  	`};
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;

const StyledLink = styled(Link)`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #fff;
    padding: 3px 7px;
    margin-right: 42px;
    text-decoration: none;
`;

const StyledLinkWithoutRightSpace = styled(StyledLink)`
    padding-right: 0px;
    margin-right: 0px;
`;

const LogoImage = styled(Image)`
    -webkit-filter: invert(100%);
    filter: invert(100%);
`;

const RightsReserved = styled.span`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    display: block;

    ${mediaDevice['smallScreen']`
		margin-top: 16px;
  	`};
`;

const SocialNetworkContainer = styled.div`
    margin-left: 11px;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Footer = () => (
    <Container>
        <Content className="container">
            <LogoLinksContainer>
                <LogoImage
                    loader={imageLoader}
                    src={logoPic}
                    alt="Logo image"
                />
                <Row>
                    <StyledLink href={ROUTES.B2B}>For B2B</StyledLink>
                    <StyledLink href={`/#${PAGE_BLOCKS.SERVICES}`} scroll={false}>Our services</StyledLink>
                    <StyledLink href={`/#${PAGE_BLOCKS.SAFETY}`} scroll={false}>Safety</StyledLink>
                    <StyledLink href={`/#${PAGE_BLOCKS.SOLUTIONS}`} scroll={false}>Solutions</StyledLink>
                    <StyledLink href={`/#${PAGE_BLOCKS.ABOUT_US}`} scroll={false}>About us</StyledLink>
                    <StyledLinkWithoutRightSpace href={`/#${PAGE_BLOCKS.CONTACT_US}`} scroll={false}>Contact us</StyledLinkWithoutRightSpace>
                </Row>
            </LogoLinksContainer>
            <SocialNetworksAndRights>
                <RightsReserved>
                    {`© ${new Date().getFullYear()} Bookinglane, Inc. All rights reserved.`}
                </RightsReserved>
                <Row>
                    <SocialNetworkContainer>
                        <Link href={SOCIAL_NETWORKS.FACEBOOK} target="_blank" rel="nofollow">
                            <Image
                                loader={imageLoader}
                                src={facebookIcon}
                                alt="Facebook logo"
                            />
                        </Link>
                    </SocialNetworkContainer>
                    <SocialNetworkContainer>
                        <Link href={SOCIAL_NETWORKS.TWITTER} target="_blank" rel="nofollow">
                            <Image
                                loader={imageLoader}
                                src={twitterIcon}
                                alt="Twitter logo"
                            />
                        </Link>
                    </SocialNetworkContainer>
                    <SocialNetworkContainer>
                        <Link href={SOCIAL_NETWORKS.INSTAGRAM} target="_blank" rel="nofollow">
                            <Image
                                loader={imageLoader}
                                src={instagramIcon}
                                alt="Instagram logo"
                            />
                        </Link>
                    </SocialNetworkContainer>
                    <SocialNetworkContainer>
                        <Link href={SOCIAL_NETWORKS.LINKED_ID} target="_blank" rel="nofollow">
                            <Image
                                loader={imageLoader}
                                src={linkedinIcon}
                                alt="Linkedin logo"
                            />
                        </Link>
                    </SocialNetworkContainer>
                </Row>
            </SocialNetworksAndRights>
        </Content>
    </Container>
);

export default Footer;
