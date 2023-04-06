import React, { useState, useEffect, useRef } from 'react';
import Input from 'components/common/input';
import { getStateList } from 'api/reservation';
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

const StateSelect = () => {
    const [stateList, setStateList] = useState<IState[]>([]);
    const [searchText, setSearchText] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const inputRef = useRef<undefined | HTMLInputElement>();

    const { setValue: setFormValue, trigger, formState: { errors, isSubmitted } } = useFormContext();

    useEffect(() => {
        fetchStateList();
    }, []);

    async function fetchStateList() {
        const responseList = await getStateList();
        setStateList(responseList);
    }

    function handleCloseDropdownMenu() {
        setIsMenuOpen(false);
    }

    const handleStateNameChange = (e) => {
        setSearchText(e.target.value);
    };

    function handleSelectOption({ label, value }: OptionType) {
        setSearchText(label);
        setFormValue('cardholder.state', value);
        if (isSubmitted) {
            trigger();
        }
        handleCloseDropdownMenu();
        inputRef?.current?.blur()
    }

    function getDropdownOptions(): OptionType[] {
        return stateList.filter(({ code, name }) => code.toLowerCase().includes(searchText.toLowerCase()) || name.toLowerCase().includes(searchText.toLowerCase()))
            .map(({ id, name }) => ({
                label: name,
                value: id,
            }));
    }

    return (
        <Container>
            <Input
                ref={inputRef as any}
                label="State"
                value={searchText}
                onChange={handleStateNameChange}
                onFocus={() => setIsMenuOpen(true)}
                onBlur={handleCloseDropdownMenu}
                errorMessage={errors['cardholder']?.['state']}
            />

            <Select
                options={getDropdownOptions()}
                onSelect={handleSelectOption}
                isMenuOpen={isMenuOpen}
            />
        </Container>
    );
};

export default StateSelect;
