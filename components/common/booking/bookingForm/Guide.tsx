import React from 'react';
import InfoIcon from 'components/svgComponents/InfoIcon';
import styled from 'styled-components';
import colors from 'constants/colors';
import { pixelToRem } from 'helpers/responsiveUITools';

const Container = styled.div`
	margin-top: 20px;
	display: flex;
`;

const StyledIcon = styled(InfoIcon)`
	padding-top: 2px;
`;

const Description = styled.span`
	display: block;
	font-weight: 400;
	font-size: ${pixelToRem(14)};
	line-height: 19px;
	color: ${colors.gray};
`;

const Guide = ({ description }: { description: string }) => (
	<Container>
		<div>
			<StyledIcon />
		</div>
		<Description>{description}</Description>
	</Container>
);

export default Guide;
