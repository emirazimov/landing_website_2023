import colors from 'constants/colors';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { pixelToRem } from 'helpers/responsiveUITools';
import CheckMarkIcon from 'components/svgComponents/CheckMarkIcon';
import { mediaDevice } from 'helpers/responsiveUITools';

const Steps = styled.div`
	margin-top: 20px;
	margin-bottom: 0px;
	width: 560px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	${mediaDevice['mobile']`
		width: 100%;
		margin-top: 30px;
		margin-bottom: 30px;
	`}
`;

const Step = styled.div`
	position: relative;
	height: 40px;
	width: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 0.5px solid ${colors.grayPlaceholder};
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: ${colors.gray};

	${(props: { isCurrent: boolean, isDone: boolean }) => props.isCurrent && `
		border: 1px solid ${colors.green};
		font-weight: 500;
		color: #000;
	`};

	${(props: { isCurrent: boolean, isDone: boolean }) => props.isDone && `
		font-weight: 500;
		color: #000;
		border-color: ${colors.green};
		background-color: ${colors.green};
	`};

	${mediaDevice['mobile']`
		height: 24px;
		width: 24px;
		font-size: ${pixelToRem(10)};
		line-height: 12px;
	`}
`;

const Edge = styled.div`
	height: 0.5px;
	background-color: ${colors.grayPlaceholder};
	flex: 1;
	margin-left: 10px;
	margin-right: 10px;

	${(props: { isDone: boolean }) => props.isDone && `
		background-color: ${colors.green};
	`};

	${mediaDevice['mobile']`
		flex: 1;
		margin-left: 10px;
		margin-right: 0px;
	`}
`;

const MobileNote = styled.div`
	position: absolute;
	top: 40px;
	white-space: nowrap;
	display: none;

	${mediaDevice['mobile']`
		flex: 1;
		display: block;
		margin-right: 0px;
	`}
`;

const Note = styled.span`
	margin-left: 10px;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	white-space: nowrap;
	color: ${colors.gray};

	
	${(props: { isHighlighted: boolean }) => props.isHighlighted && `
		color: #000;
	`};

	${mediaDevice['mobile']`
		display: none;
	`}
`;

const webSteps = [
	{
		step: 0,
		name: '1',
		label: 'Ride details',
	},
	{
		isEdge: true,
		step: 0,
	},
	{
		step: 1,
		name: '2',
		label: 'Quote',
	},
	{
		isEdge: true,
		step: 1,
	},
	{
		step: 4,
		name: '3',
		label: 'Checkout',
	},
];

const mobileSteps = [
	{
		step: 0,
		name: '1',
		label: 'Ride details',
	},
	{
		isEdge: true,
		step: 0,
	},
	{
		step: 1,
		name: '2',
		label: 'Quote',
	},
	{
		isEdge: true,
		step: 1,
	},
	{
		step: 2,
		name: '3',
		label: 'Preview',
	},
	{
		isEdge: true,
		step: 2,
	},
	{
		step: 3,
		name: '4',
		label: 'Checkout',
	}
];


const ProgressIndicator = ({ isMobileView, currentStep }) => {
	const indicatorSteps = useMemo(() => isMobileView ? mobileSteps : webSteps, [isMobileView]);

	function isCurrent(index: number) {
		return currentStep === index;
	}

	function isDone(index: number) {
		return currentStep > index;
	}

	function renderSteps() {
		return indicatorSteps.map((item, index) => {
			if (item.isEdge) {
				return <Edge isDone={isDone(item.step)} />;
			}

			let noteStyle = {};

			if (item.step === 0) {
				noteStyle = { left: '0px' };
			}

			if (item.step === 3) {
				noteStyle = { right: '0px' };
			}

			return (
				<>
					<Step
						isCurrent={isCurrent(item.step)}
						isDone={isDone(item.step)}
						key={index}
					>
						{isDone(item.step) ? <CheckMarkIcon /> : item.name}
						<MobileNote style={noteStyle}>{item.label}</MobileNote>
					</Step>
					<Note isHighlighted={isDone(item.step) || isCurrent(item.step)}>{item.label}</Note>
				</>
			);
		});
	}

	return (
		<Steps>
			{renderSteps()}
		</Steps>
	);
}

export default ProgressIndicator;