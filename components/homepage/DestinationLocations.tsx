import React from 'react';
import PageTitle from 'components/common/PageTitle';
import styled from 'styled-components';
import Link from 'next/link';
import RightIcon from 'components/svgComponents/RightIcon'
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';
import colors from 'constants/colors';
import { CITIES, HOUSTON } from 'constants/routes';

const Container = styled.div`
    margin-top: 130px;
`;

const Content = styled.div`
    margin-top: 80px;
    display: flex;
    flex-wrap: wrap;

    ${mediaDevice['mobile']`
        margin-top: 20px;
    `}
`;

const LocationItem = styled.div`
    width: fit-content;
    margin: 0px 12px 10px 0px;
    padding: 18px 40px;
    display: flex;
    align-items: center;
    border: 2px solid ${colors.blue};
    border-radius: 30px;
    font-style: normal;
    font-weight: 500;
    font-size: ${pixelToRem(16)};
    line-height: 20px;
    color: ${colors.blue};

    ${mediaDevice['mobile']`
        border: 1px solid ${colors.blue};
        padding: 10px 26px;
        margin: 0px 10px 10px 0px;
        font-size: ${pixelToRem(12)};
        line-height: 15px;
    `}
`;

const StyledArrowIcon = styled(RightIcon)`
    margin-left: 8px;

    ${mediaDevice['mobile']`
        margin-left: 6px;
    `}
`;

const StyledLinks = styled(Link)`
    text-decoration: none;
`;

const locations = [
    {
        name: 'San Francisco Bay Area',
        path: CITIES.SAN_FRANSISCO,
    },
    {
        name: 'Los Angeles',
        path: CITIES.LOS_ANGELES,
    },
    {
        name: 'San Diego',
        path: CITIES.SAN_DIEGO,
    },
	{
		name: 'Monterey',
		path: CITIES.MONTEREY
	},
    {
        name: 'Napa Valley',
        path: CITIES.NAPA_VALLEY,
    },
    {
        name: 'New York',
        path: CITIES.NEW_YORK,
    },
    {
        name: 'Houston',
        path: HOUSTON.LIMO_SERVICE,
    },
];

const DestinationLocations = () => {
    return (
        <Container>
            <PageTitle.h1>Top destinations:</PageTitle.h1>
            <Content>
                {
                    locations.map(({ name, path }) => (
                        <StyledLinks href={path} key={path}>
                            <LocationItem>
                                <>
                                    {name}
                                    <StyledArrowIcon />
                                </>
                            </LocationItem>
                        </StyledLinks>
                    ))
                }
            </Content>
        </Container>
    );
};

export default DestinationLocations;
