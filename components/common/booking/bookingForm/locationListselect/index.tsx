import React from 'react';
import styled from 'styled-components';
import { useFieldArray, useFormContext } from 'react-hook-form';
import PlusIcon from 'components/svgComponents/PlusIcon';
import MinusIcon from 'components/svgComponents/MinusIcon';
import InputButton from 'components/common/InputButton';
import LocationSelectItem from './LocationSelectItem';

export const Row = styled.div`
    display: flex;
`;

export const ActionButton = styled(InputButton)`
    margin-left: 10px;
`;

type Props = {
    name: string,
    isReturn?: boolean
}

const LocationListselect = ({ name }: Props) => {
    const { setValue: setFormValue, trigger, control } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name,
    });

    function generateLabel(index: number) {
        if (index === 0) {
            return 'Pickup location';
        }

        return fields.length === 2 ? 'To' : `To ${index}`;
    }

    function handleLocationAdd() {
        append({
            address: '',
            coordinates: null,
            placeId: '',
            placeType: 0
        });
    }

    function renderActionButtons(index: number) {
        const handleRemoveLocation = () => remove(index);
        const locationsSize = fields.length;

        if (index === 0) {
            return null;
        }

        if (index === locationsSize - 1) {
			if (locationsSize > 2) {
				return (
					<Row>
						<ActionButton aria-label="Decrement" onClick={handleRemoveLocation}>
							<MinusIcon isActive />
						</ActionButton>
						<ActionButton onClick={handleLocationAdd}>
							<PlusIcon isActive />
						</ActionButton>
					</Row>
				);
			}

			return (
                <Row>
                    <ActionButton aria-label="Increment" onClick={handleLocationAdd}>
                        <PlusIcon isActive />
                    </ActionButton>
                </Row>
            );
            
        }

        return (
            <ActionButton aria-label="Decrement" onClick={handleRemoveLocation}>
                <MinusIcon isActive />
            </ActionButton>
        );
    }

    return (
        <>
            {
                 fields.map((field, index) => (
                    <LocationSelectItem
                        name={name}
                        key={field.id}
                        // setFormValue={setFormValue}
                        generateLabel={generateLabel}
                        // trigger={trigger}
                        // control={control}
                        index={index}
                        // field={field}
                        renderActionButtons={renderActionButtons}
                    />
                ))
            }
        </>
    );
};

export default LocationListselect;
