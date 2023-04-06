import React from 'react';
import Input from 'components/common/input';
import { PatternFormat } from 'react-number-format';

const PhoneNumberInput = ({ label, ...props }) => {
    return (
        <PatternFormat
			format="+1 (###) ### ####" allowEmptyFormatting mask="_"
            customInput={Input}
            label={label}
            {...props}
        />
    );
};


export default PhoneNumberInput;