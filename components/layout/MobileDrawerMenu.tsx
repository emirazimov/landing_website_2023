import React, { useState } from 'react';
import Drawer from 'rc-drawer';
import styled from 'styled-components';
import logoPic from 'public/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import { imageLoader } from 'helpers/image';
import closeIcon from 'public/close.png';
import { ROUTES, PAGE_BLOCKS } from 'constants/routes';
import PhoneIcon from 'components/svgComponents/PhoneIcon';
import chevronDown from 'public/chevronDown.png';

import 'rc-drawer/assets/index.css';

const Container = styled.div`
    width: 100%;
    background: #FFFFFF;
`;

const Header = styled.div`
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled(Image)`
    ${mediaDevice['smallScreen']`
        height: 30px;
        width: auto;
    `}
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: right;
    border-radius: 50%;
`;

const LinksContainer = styled.div`
    padding: 6px 0px 20px 0px;
    display: flex;
    flex-direction: column;
`;

const StyledLink = styled(Link)`
    font-weight: 500;
    font-size: ${pixelToRem(12)};
    line-height: 15px;
    color: #000000;
    padding: 10px 0px;
    text-decoration: none;
`;

const DropdownLink = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: ${pixelToRem(12)};
    line-height: 15px;
    color: #000000;
    padding: 10px 0px;
    text-decoration: none;
`;

const DropDownNav = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

const CallUsButton = styled.span`
    margin-left: 6px;
    font-weight: 500;
    font-size: ${pixelToRem(12)};
    line-height: 15px;
    text-decoration-line: underline;
`;

const ChevronDown = styled(Image)`
   margin-left: 4px;
`;


const DropdownContent = styled.div`
    margin-left: 14px;
    display: flex;
    flex-direction: column;

    display: ${(props: { isOpen: boolean }) => props.isOpen ? 'flex' : 'none'};
`;

const DropdownLinkItem = styled(StyledLink)`
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
`;

const contentWrapperStyle = {
    width: '100%',
    borderRadius: '0px 0px 10px 10px',
};

interface Props {
    isMobileDrawerOpen: boolean,
    onClose: () => void,
}

const MobileDrawerMenu = ({ isMobileDrawerOpen, onClose }: Props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropDown(e) {
        e.stopPropagation();
        setIsDropdownOpen((state) => !state);
    }

    return (
        <Drawer
            open={isMobileDrawerOpen}
            onClose={onClose}
            placement="top"
            contentWrapperStyle={contentWrapperStyle}
        >
            <Container className="container">
                <Header>
                    <Logo
                        loader={imageLoader}
                        src={logoPic}
                        alt="Logo image"
                        
                    />
                    <CloseButton onClick={onClose}>
                        <Image
                            loader={imageLoader}
                            src={closeIcon}
                            alt="Close button"
                            
                        />
                    </CloseButton>
                </Header>

                <LinksContainer onClick={onClose}>
                    <StyledLink href={ROUTES.B2B}>For B2B</StyledLink>
                    <DropDownNav>
                        <DropdownLink onClick={toggleDropDown}>
                            Our services
                            <ChevronDown
                                loader={imageLoader}
                                src={chevronDown}
                                alt="Our services"
                                
                            />
                        </DropdownLink>
                        <DropdownContent isOpen={isDropdownOpen}>
                            <DropdownLinkItem href={ROUTES.INTER_CITY}>Intercity and innercity rides</DropdownLinkItem>
                            <DropdownLinkItem href={ROUTES.TOURS}>Special tours</DropdownLinkItem>
                            <DropdownLinkItem href={ROUTES.AIRPORT}>Airport transfers</DropdownLinkItem>
							<DropdownLinkItem href={ROUTES.CORPORTATE_TRAVEL}>Corporate travel</DropdownLinkItem>
                        </DropdownContent>
                    </DropDownNav>
                    <StyledLink href={`/#${PAGE_BLOCKS.SAFETY}`} scroll={false}>Safety </StyledLink>
                    <StyledLink href={`/#${PAGE_BLOCKS.SOLUTIONS}`} scroll={false}>Solutions </StyledLink>
                    <StyledLink href={`/#${PAGE_BLOCKS.ABOUT_US}`} scroll={false}>About us</StyledLink>
                    <StyledLink href={`/#${PAGE_BLOCKS.CONTACT_US}`} scroll={false}>Contact us</StyledLink>
                    <Link href={ROUTES.PHONE_NUMBER}>
                        <PhoneIcon />
                        <CallUsButton>Call us</CallUsButton>
                    </Link>
                </LinksContainer>
            </Container>
        </Drawer>
    );
};

export default MobileDrawerMenu;