import React from 'react';
import Input from 'components/common/input';
import { PatternFormat } from 'react-number-format';

const CardnumberInput = ({ label, format, ...props }) => {
    return (
        <PatternFormat
			format={format}
            mask=" "
            customInput={Input}
            label={label}
            {...props}
        />
    );
};


export default CardnumberInput;