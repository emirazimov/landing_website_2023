import { css } from 'styled-components';

const sizes = {
	ews: 5000,
	uhd: 1980,
	widescreen: 1366,
	smallScreen: 1120,
	tablet: 768,
	mobile: 500,
};

export const mediaDevice = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args ) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
	return acc
}, {});

export const pixelToRem = (pixelValue) => {
    const remValue = (pixelValue / 16).toFixed(4);

    return `${remValue}rem`;
};

export const isMobile = (windowWidth) => {
	if (windowWidth && windowWidth < sizes.mobile) {
		return true;
	}

	return false;
};

export const isSmallScreenOrTablet = (windowWidth) => {
	if (windowWidth && windowWidth < sizes.smallScreen) {
		return true;
	}

	return false;
};