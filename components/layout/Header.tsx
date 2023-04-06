import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { imageLoader } from 'helpers/image';
import Link from 'next/link';
import Button from 'components/common/Button';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import logoPic from 'public/logo.png';
import hamburgerIcon from 'public/hamburger.png';
import chevronDown from 'public/chevronDown.png';
import { ROUTES, PAGE_BLOCKS } from 'constants/routes';
import MobileDrawerMenu from './MobileDrawerMenu';
import colors from 'constants/colors';
import OutsideClickHandler from 'react-outside-click-handler';

const Container = styled.header`
    width: 100%;
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 4px 15px #E1E6EA;
    display: flex;
    align-items: center;
    justify-content: center;

    ${mediaDevice['smallScreen']`
        height: 51px;
  	`};
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: inherit;

    ${mediaDevice['smallScreen']`
        width: 100%;
    `}

`;

const Logo = styled(Image)`
    ${mediaDevice['smallScreen']`
        height: 30px;
        width: auto;
    `}
`;

const ChevronDown = styled(Image)`
   margin-left: 4px;
`;

const LinksContainer = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;

    ${mediaDevice['smallScreen']`
        display: none;
    `}
`;

const LogoWrapperLink = styled(Link)`
    ${mediaDevice['smallScreen']`
        width: inherit;
        height: 100%;
        display: flex;
        align-items: center;
    `}
`;

const StyledLink = styled(Link)`
    font-weight: 500;
    font-size: ${pixelToRem(14)};
    line-height: 17px;
    color: #000000;
    padding: 3px 7px;
    margin-right: 34px;
    text-decoration: none;
`;

const DropDownNav = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: ${pixelToRem(14)};
    line-height: 17px;
    color: #000000;
    padding: 3px 7px;
    margin-right: 40px;
    text-decoration: none;
    cursor: pointer;
`;

const CalltoActionButton = styled(Button)`
    margin-left: 8px;
`;

const ButtonText = styled.span`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
`;

const HamburgerButton = styled.button`
    background: none;
    border: none;
    display: none;
    margin-right: 8px;

    ${mediaDevice['smallScreen']`
        display: block;
    `}
`;

const DropdownContent = styled.div`
    width: 210px;
    display: ${(props: { isVisible: boolean }) => props.isVisible ? 'block' : 'none'};
    padding: 10px 0px;
    position: absolute;
    left: 0px;
    top: 28px;
    background: #fff;
    box-shadow: 0px 4px 10px #C1C6CB;
    border-radius: 10px;
`;

const DropdownItemLink = styled(Link)`
    width: 100%;
    height: 30px;
    padding: 0px 20px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #000;
    text-decoration: none;

    :hover {
        background-color: ${colors.lightGray};
    }
`;

const LinkUnsetDecoration = styled(Link)`
    text-decoration: unset;
`

const servicesLink = [
    {
        route: ROUTES.INTER_CITY,
        title: "Innercity and intercity rides"
    },
    {
        route: ROUTES.TOURS,
        title: "Special tours"
    },
    {
        route: ROUTES.AIRPORT,
        title: "Airport transfers"
    },
    {
        route: ROUTES.CORPORTATE_TRAVEL,
        title: "Corporate travel"
    }
]

const Header = () => {
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState<boolean>(false);
    const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

    function toggleDrawerOpenState() {
        setIsMobileDrawerOpen(state => !state);
    }

    function handleOpenNavDropdown() {
        setIsServiceDropdownOpen(true);
    }

    function handleCloseNavDropdown() {
        setIsServiceDropdownOpen(false);
    }

    return (
        <Container>
            <Content className="container">
                <LogoWrapperLink href={ROUTES.HOME}>
                    <Logo
                        loader={imageLoader}
                        src={logoPic}
                        alt="Logo image"
                        
                    />
                </LogoWrapperLink>
                <LinksContainer>
                    <StyledLink href={ROUTES.B2B}>For B2B</StyledLink>
                    <DropDownNav onClick={handleOpenNavDropdown}>
                        Our services
                        <ChevronDown
                            loader={imageLoader}
                            src={chevronDown}
                            alt="Our services"
                            
                        />  
                        <OutsideClickHandler onOutsideClick={handleCloseNavDropdown}>
                            <DropdownContent isVisible={isServiceDropdownOpen}>
                                {
                                    servicesLink.map((item) => {
                                        return (
                                            <DropdownItemLink href={item.route} key={item.route}>
                                                {item.title}
                                            </DropdownItemLink>
                                        )
                                    })
                                }
                            </DropdownContent>
                        </OutsideClickHandler>
                    </DropDownNav>
                    <StyledLink href={`/#${PAGE_BLOCKS.SAFETY}`} scroll={false}>Safety </StyledLink>
                    <StyledLink href={`/#${PAGE_BLOCKS.SOLUTIONS}`} scroll={false}>Solutions </StyledLink>
                    <StyledLink href={`/#${PAGE_BLOCKS.ABOUT_US}`} scroll={false}>About us</StyledLink>
                    <StyledLink href={`/#${PAGE_BLOCKS.CONTACT_US}`} scroll={false}>Contact us</StyledLink>
                    <LinkUnsetDecoration href={ROUTES.PHONE_NUMBER}>
                        <CalltoActionButton onClick={() => null}>
                            <ButtonText>Call us</ButtonText>
                        </CalltoActionButton>
                    </LinkUnsetDecoration>
                </LinksContainer>
            </Content>
            <HamburgerButton onClick={toggleDrawerOpenState}>
                <Image
                    loader={imageLoader}
                    src={hamburgerIcon}
                    alt="Hamburger button"
                    
                />
            </HamburgerButton>

            <MobileDrawerMenu
                isMobileDrawerOpen={isMobileDrawerOpen}
                onClose={toggleDrawerOpenState}
            />
        </Container>
    );
};

export default Header;
