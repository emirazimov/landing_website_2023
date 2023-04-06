import React from 'react';
import styled from 'styled-components';
import { Controller, useFormContext } from 'react-hook-form';
import LocationPickerFormInput from 'components/common/locationSelectForm';
import { mediaDevice } from 'helpers/responsiveUITools';

const LocationContainer = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 20px;

    ${mediaDevice['mobile']`
        margin-top: 8px;
    `}
`;

type Props = {
    index: number,
    generateLabel: (index: number) => string,
    name: string,
    renderActionButtons: (index: number) => JSX.Element | null, 
}

const LocationSelectItem = ({ index, generateLabel, renderActionButtons, name }: Props) => {
    const { setValue: setFormValue, trigger, control,  formState: { errors, isSubmitted } } = useFormContext();

    const setLocationPickerValue = (newValue: any) => {
        setFormValue(`${name}.${index}`, newValue, { shouldDirty: true, shouldTouch: true });
        if (isSubmitted) {
            trigger();
        }
    }

	const [parentNode, childNode] = name.split('.');

    const errorMessage = errors?.[parentNode]?.[childNode]?.[index];

    return (
        <Controller
            name={`${name}.${index}`}
            control={control}
            render={({ field }) => (
                <LocationContainer>
                    <LocationPickerFormInput
                        label={generateLabel(index)}
                        errorMessage={errorMessage}
                        setValue={setLocationPickerValue}
                        {...field}
                    />
                    { renderActionButtons(index) }
                </LocationContainer>
            )}

            rules={{
                validate: {
                    valid: (locationValue: any) => {
                        if (locationValue.address === '') {
                            return 'This field is required'
                        }
                        if (!locationValue.coordinates) {
                            return 'Select location';
                        }

                        return true;
                    },
                }
            }}
        />
    );
};

export default LocationSelectItem;
