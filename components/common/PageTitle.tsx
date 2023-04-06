import styled from 'styled-components';
import { mediaDevice, pixelToRem } from 'helpers/responsiveUITools';

const PageTitle = {
    h1: styled.h1`
        padding-top: 70px;
        font-weight: 800;
        font-size: ${pixelToRem(48)};
        line-height: 59px;
        display: block;
        margin-block-end: 0;
        margin-block-start: 0;

        ${mediaDevice['mobile']`
            padding-top: 30px;
            font-weight: 700;
            font-size: ${pixelToRem(26)};
            line-height: 32px;
        `}  
    `,
    h2: styled.h2`
        padding-top: 70px;
        font-weight: 800;
        font-size: ${pixelToRem(48)};
        line-height: 59px;
        display: block;
        margin-block-end: 0;
        margin-block-start: 0;

        ${mediaDevice['mobile']`
            padding-top: 30px;
            font-weight: 700;
            font-size: ${pixelToRem(26)};
            line-height: 32px;
        `}
    `,
    h3: styled.h3`
        padding-top: 70px;
        font-weight: 800;
        font-size: ${pixelToRem(48)};
        line-height: 59px;
        display: block;
        margin-block-end: 0;
        margin-block-start: 0;

        ${mediaDevice['mobile']`
            padding-top: 30px;
            font-weight: 700;
            font-size: ${pixelToRem(26)};
            line-height: 32px;
        `}
    `
};

export default PageTitle;
