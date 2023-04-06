import React from 'react';

const InfoIcon = (props) => (
	<svg
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		width={22}
		height={22}
		{...props}
	>
		<g clipPath="url(#a)">
			<circle cx={8} cy={4.667} r={0.667} fill="#5B6267" />
			<path
				d="M7.333 6.667H8v4.666M14.667 8A6.667 6.667 0 1 1 1.333 8a6.667 6.667 0 0 1 13.334 0Z"
				stroke="#5B6267"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="a">
				<path fill="#fff" d="M0 0h16v16H0z" />
			</clipPath>
		</defs>
	</svg>
);

export default InfoIcon;
