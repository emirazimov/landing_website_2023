import React from 'react';
import colors from 'constants/colors';

interface Props {
    isActive?: boolean
}

const MinusIcon = ({ isActive = false }: Props) => {
    return (
        <svg
            width={16}
            height={1}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M.667 1C.298 1 0 .776 0 .5S.298 0 .667 0h14.666c.368 0 .667.224.667.5s-.299.5-.667.5H.667Z"
                fill={isActive ? colors.black : colors.grayInactiveWeb}
            />
        </svg>
    );
};

export default MinusIcon;
