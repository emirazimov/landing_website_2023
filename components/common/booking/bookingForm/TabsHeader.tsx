import React from 'react';
import Tabs from 'rc-tabs';
import styled from 'styled-components';
import colors from 'constants/colors';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';

export const TAB_INDEX = {
    ONE_WAY_TRIP: 0,
    ROUNT_TRIP: 1,
    HOURLY_TRIP: 2,
};

const TabLabel = styled.div`
    flex: 1 !important;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: center;


    ${mediaDevice['mobile']`
        height: 60px;
    `}
`;

const TabHeaderLabel = styled.span`
    font-style: normal;
    font-weight: 500;
    color: ${colors.grayInactiveWeb};
    font-size: ${pixelToRem(16)};
    line-height: 20px;

    ${(props: { isActive: number }) => props.isActive && `
        color: #000;
        font-weight: 600;
    `};

    ${mediaDevice['mobile']`
        font-weight: 400;
        font-size: ${pixelToRem(12)};
        line-height: 15px;
        color: ${colors.grayInactiveMobile};

        ${(props: { isActive: number }) => props.isActive && `
            color: #000;
            font-weight: 500;
        `};
    `}
`;

const StyledTabs = styled(Tabs)`
    position: sticky;
    background: #fff;
    left: 20px;
    top: 0px;
    right: 10px;
    z-index: 100;
    border: none;
    border-bottom: 0.3px solid ${colors.grayInactiveWeb};

    .rc-tabs-nav-wrap {
        flex: auto;
    }

    & .rc-tabs-nav-list {
        width: 100%;
    }

    & .rc-tabs-tab {
        flex: 1;
        display: flex;
        justify-content: center;
    }

    & .rc-tabs-ink-bar-animated {
        height: 4px;
        border-radius: 4px;
        background: ${colors.blue};
    }
`;

type Props = {
    index: number,
    onChangeIndex: (number) => void,
}

const tabItemDataList = [
    {
        label: 'One way',
        key: TAB_INDEX.ONE_WAY_TRIP,
    },
    {
        label: 'Round trip',
        key: TAB_INDEX.ROUNT_TRIP,
    },
    {
        label: 'Hourly',
        key: TAB_INDEX.HOURLY_TRIP,
    }
];

const TabsHeader = ({ index, onChangeIndex }: Props) => {
    function handleOnTabChange(newIndex: string) {
        onChangeIndex(parseInt(newIndex, 10));
    }

    function getItems() {
        return tabItemDataList.map(({ label, key }) => ({
            label: <TabLabel><TabHeaderLabel isActive={key === index ? 1 : 0}>{label}</TabHeaderLabel></TabLabel>,
            key: `${key}`,
        }));
    }

    return (
        <StyledTabs
            moreIcon={null}
            activeKey={`${index}`}
            onChange={handleOnTabChange}
            items={getItems()}
        />
    );
};

export default TabsHeader;
