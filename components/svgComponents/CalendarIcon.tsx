import * as React from 'react';

const CalendarIcon = (props) => (
    <svg
        width={20}
        height={19}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.556 1h1.666C18.756 1 20 2.118 20 3.499V16.5C20 17.881 18.756 19 17.222 19H2.778C1.244 19 0 17.881 0 16.501V3.499c0-1.38 1.244-2.5 2.778-2.5h1.666V.5C4.444.225 4.694 0 5 0c.307 0 .556.224.556.5V1h8.888V.5c0-.276.25-.5.556-.5.307 0 .556.224.556.5V1Zm-1.112 1H5.556v.499c0 .276-.25.5-.556.5-.307 0-.556-.224-.556-.5v-.5H2.778c-.92 0-1.667.672-1.667 1.5v2.499H18.89v-2.5c0-.827-.746-1.499-1.667-1.499h-1.666v.5c0 .276-.25.5-.556.5-.307 0-.556-.224-.556-.5v-.5ZM1.111 6.996H18.89v9.504c0 .828-.746 1.5-1.667 1.5H2.778c-.92 0-1.667-.672-1.667-1.5V6.997Z"
            fill="#000"
        />
    </svg>
)

export default CalendarIcon;