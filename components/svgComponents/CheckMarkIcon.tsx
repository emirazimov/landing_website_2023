import React from 'react';

const CheckMarkIcon = ({ isMobile = true }: { isMobile?: boolean }) => {
    return (
        <svg width={isMobile ? '11' : '16'} height={isMobile ? '8' : '12'} viewBox={isMobile ? '0 0 11 8' : '0 0 16 12'} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 6.79289L10.1464 0.146447C10.3417 -0.0488155 10.6583 -0.0488155 10.8536 0.146447C11.0488 0.341709 11.0488 0.658292 10.8536 0.853554L3.85355 7.85355C3.65829 8.04882 3.34171 8.04882 3.14645 7.85355L0.146447 4.85355C-0.0488155 4.65829 -0.0488155 4.34171 0.146447 4.14645C0.341709 3.95118 0.658291 3.95118 0.853553 4.14645L3.5 6.79289Z" fill="white"/>
        </svg>
    );
};

export default CheckMarkIcon;
