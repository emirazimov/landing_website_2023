import React, { useEffect, useRef } from 'react';
import Input from 'components/common/input';
import MenuDropdown from 'components/common/Select';
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService';
import styled from 'styled-components';
import { AIRPORT_TYPE } from 'constants/booking';
import RemoveIcon from 'components/svgComponents/RemoveIcon';

const Container = styled.div`
    flex: 1;
`;

type Props = {
    label: string,
    setValue: (location) => void,
    errorMessage?: { message: string },
	value: ILocation
}

const LocationPickerFormInput = ({ label, value, setValue, errorMessage, ...props }: Props) => {
    const {
        placesService,
        placePredictions,
        getPlacePredictions,
    } = usePlacesService({
        apiKey: 'AIzaSyAubahwwVBkFEkRdwxgIU-EejzAOWGtEnU',
    });

    useEffect(() => {
        getPlacePredictions({ input: value.address });
    }, [value.address]);

    const dropdownOpenRef = useRef<boolean>();

    const handleChange = (e) => {
        dropdownOpenRef.current = true;
        setValue({ ...value, address: e.target.value });
    };

    function getDropdownOptions() {
        return placePredictions.map(({ description, place_id }) => ({
            label: description,
            value: place_id,
        }));
    };

    const handleSelect = async ({ value, label }) => {
        const callback = (placeDetails) => {  
            setValue({
                address: label,
                placeId: placeDetails.place_id,
                placeType: placeDetails.types.includes('airport') ? AIRPORT_TYPE : 0,
                coordinates: {
                    latitude: placeDetails.geometry.location.lat(),
                    longitude: placeDetails.geometry.location.lng(),
                }
            });
        };

        dropdownOpenRef.current = false;

        placesService?.getDetails({placeId: value}, callback);        
    };

	function handleRemoveLocationData() {
		setValue({
			address: '',
			coordinates: null,
			placeId: '',
			placeType: 0,
		});
	};

	function renderRemoveIcon() {
		if (value?.placeId) {
			return (
				<RemoveIcon onClick={handleRemoveLocationData} />
			);
		};

		return null;
	};

    return (
        <Container>
            <Input
                label={label}
                errorMessage={errorMessage}
                {...props}
                value={value.address}
                onChange={handleChange}
                renderExtra={renderRemoveIcon}
            />

            <MenuDropdown
                options={getDropdownOptions()}
                isMenuOpen={dropdownOpenRef?.current && !!getDropdownOptions().length}
                onSelect={handleSelect}
            />
        </Container>
    );
};

export default LocationPickerFormInput;
