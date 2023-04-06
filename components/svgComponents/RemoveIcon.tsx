import colors from 'constants/colors';
import * as React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
	fill: ${colors.gray};
	cursor: pointer;

	:hover {
		fill: #000;
	}
`;

const RemoveIcon = (props) => (
	<Svg
		className="svg-icon"
		style={{
			width: "0.85em",
			height: "0.85em",
			verticalAlign: "middle",
			overflow: "hidden",
		}}
		viewBox="0 0 1024 1024"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="m622.277 508.062 257.97-257.97c11.815-11.815 11.815-29.538 0-41.354l-41.355-41.353c-11.815-11.816-29.538-11.816-41.354 0L539.57 425.354c-7.877 7.877-19.692 7.877-27.569 0L254.03 165.415c-11.815-11.815-29.538-11.815-41.353 0l-41.354 41.354c-11.815 11.816-11.815 29.539 0 41.354l257.97 257.97c7.876 7.876 7.876 19.692 0 27.569L169.352 793.6c-11.815 11.815-11.815 29.538 0 41.354l41.355 41.354c11.815 11.815 29.538 11.815 41.354 0L512 618.338c7.877-7.876 19.692-7.876 27.57 0l257.968 257.97c11.816 11.815 29.539 11.815 41.354 0l41.354-41.354c11.816-11.816 11.816-29.539 0-41.354l-257.97-257.97c-5.907-7.876-5.907-19.692 0-27.568z" />
	</Svg>
);

export default RemoveIcon;
