import React from 'react';
import colors from 'constants/colors';

interface Props {
    isActive?: boolean
}

const PlusIcon = ({ isActive = false }: Props) => {
    return (
        <svg
            width={16}
            height={16}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.615 7.385h6.77a.615.615 0 1 1 0 1.23h-6.77v6.77a.615.615 0 1 1-1.23 0v-6.77H.615a.615.615 0 0 1 0-1.23h6.77V.615a.615.615 0 1 1 1.23 0v6.77Z"
                fill={isActive ? colors.black : colors.grayInactiveWeb}
            />
        </svg>
    );
};

export default PlusIcon;
