import React, { useState, useRef } from 'react';
import Input from 'components/common/input';
import { getAirlineNames } from 'api/airlines';
import styled from 'styled-components';
import Select from 'components/common/Select';
import { useEffect } from 'react';
import useDebounce from 'components/hooks/useDebounce';

const Container = styled.div`
    flex: 1;
`;

type OptionType = {
    value: number,
    label: string,
}

type Props = {
    onAirlineSelect: (newValue: { id: number, name: string }) => void,
    selectedAirline: null | { id: number, name: string }
}

const AirlineSelect = ({ onAirlineSelect, selectedAirline }: Props) => {
    const [airlines, setAirlines] = useState<IAirline[]>([]);
    const [airlineName, setAirlineName] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const inputRef = useRef<undefined | HTMLInputElement>();
    const debouncedSearchText = useDebounce(airlineName, 300);

    useEffect(() => {
        fetchAirlineList(debouncedSearchText);
    }, [debouncedSearchText]);

    useEffect(() => {
        if (selectedAirline?.name) {
            setAirlineName(selectedAirline.name);
        }
    }, [selectedAirline])

    async function fetchAirlineList(query: string) {
        const responseList = await getAirlineNames(query);
        setAirlines(responseList);
    }

    function handleCloseDropdownMenu() {
        if (selectedAirline && selectedAirline.name !== airlineName) {
            setAirlineName(selectedAirline.name);
        }
        setIsMenuOpen(false);
    }

    const handleAirportNameChange = (e) => {
        setAirlineName(e.target.value);
    };

    function handleSelectOption({ label, value }: OptionType) {
        setAirlineName(label);
        onAirlineSelect({ id: value, name: label })
        handleCloseDropdownMenu();
        inputRef?.current?.blur()
    }

    function getDropdownOptions(): OptionType[] {
        return airlines.map(({ id, code, code3Letter, name }) => ({
            label: `${code3Letter ? code3Letter : code} ${name}`,
            value: id,
        }));
    }


    return (
        <Container>
            <Input
                ref={inputRef}
                label="Airlines"
                value={airlineName}
                onChange={handleAirportNameChange}
                renderExtra={() => null}
                onFocus={() => setIsMenuOpen(true)}
                onBlur={handleCloseDropdownMenu}
            />

            <Select
				id="test-airline-select"
                options={getDropdownOptions()}
                onSelect={handleSelectOption}
                isMenuOpen={isMenuOpen}
            />
        </Container>
    );
};

export default AirlineSelect;
