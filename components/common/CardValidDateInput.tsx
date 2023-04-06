import React from 'react';
import { NumberFormatBase } from 'react-number-format';
import Input from 'components/common/input';

const CardValidityInput = ({ label, ...props }) => {
    const format = (val) => {
        if (val === "") return "";
        let months = val?.substring(0, 2);
        let years = val?.substring(2, 4);

        if (months?.length === 1 && months[0] > 1) {
            months = `0${months[0]}`;
        } else if (months?.length === 2) {
            if (Number(months) === 0) {
                months = `01`;
            } else if (Number(months) > 12) {
                months = "12";
            }
        }

        return `${months}/${years}`;
    };

    return (
        //@ts-ignore
        <NumberFormatBase
            customInput={Input}
            format={format}
            placeholder="mm/yy"
            label={label}
            {...props}
        />
    );
};


export default CardValidityInput;