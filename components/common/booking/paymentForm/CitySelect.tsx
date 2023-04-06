import React, { useState, useEffect, useRef } from 'react';
import Input from 'components/common/input';
import { getCityList } from 'api/reservation';
import styled from 'styled-components';
import Select from 'components/common/Select';
import { useFormContext } from 'react-hook-form';


const Container = styled.div`
    flex: 1;
 `;

type OptionType = {
    value: number,
    label: string,
}

type Props = {
    stateId: number,
    cityId: number,
}

const CitySelect = ({ stateId, cityId }: Props) => {
    const [cityList, setCityList] = useState<ICity[]>([]);
    const [searchText, setSearchText] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const inputRef: any = useRef<undefined | HTMLInputElement>();

    const { setValue: setFormValue, trigger, formState: { errors, isSubmitted } } = useFormContext();

    useEffect(() => {
        if (stateId) {
            fetchCityList(`${stateId}`);
        }
    }, [stateId]);

    useEffect(() => {
        if (!cityId) {
            setSearchText('');
        }
    }, [cityId]);

    async function fetchCityList(stateId: string) {
        const responseList = await getCityList(stateId);

        setCityList(responseList);
    }

    function handleCloseDropdownMenu() {
        setIsMenuOpen(false);
    }

    const handleNameChange = (e) => {
        setSearchText(e.target.value);
    };

    function handleSelectOption({ label, value }: OptionType) {
        setSearchText(label);
        setFormValue('cardholder.city', value);
        if (isSubmitted) {
            trigger();
        }
        handleCloseDropdownMenu();
        inputRef?.current?.blur()
    }

    function getDropdownOptions(): OptionType[] {
        return cityList.filter(({ name }) => name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())).map(({ id, name }) => ({
            label: name,
            value: id,
        }));
    }

    return (
        <Container>
            <Input
                ref={inputRef}
                label="City"
                value={searchText}
                onChange={handleNameChange}
                //@ts-ignore
                renderExtra={() => null}
                onFocus={() => setIsMenuOpen(true)}
                onBlur={handleCloseDropdownMenu}
                errorMessage={errors['cardholder']?.['city']}
            />

            <Select
                options={getDropdownOptions()}
                onSelect={handleSelectOption}
                isMenuOpen={isMenuOpen}
            />
        </Container>
    );
};

export default CitySelect;
