import { getStateList } from 'api/reservation';
import Select from 'components/common/Select';
import Input from 'components/payment/CurrencyInput';
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import chevronDown from 'public/chevronDown.png';
import Image from 'next/image';
import { imageLoader } from 'helpers/image';

const Container = styled.div`
    width: auto;
 `;

const CustomInput = styled(Input)`
    max-width: 120px !important;
    height: 35px !important;
    padding: 0px 10px !important; 

    label {
        transform: scale(1) translate3d(0,10px,0) !important;
        visibility: ${({on}: { on: string }) => !on ? 'visible' : 'hidden'}
    }

    input {
        margin-top: -12px;
    }
`;

const Row = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-between: space-between;
`;

const ChevronDown = styled(Image)`
    position: absolute;
    right: 10px;
    opacity: 0.5;
    cursor: pointer;
`;

type OptionType = {
    value: number,
    label: string,
}

const GratuitySelect = memo(({ total, setTip }: { total: string, setTip: (obj: object) => void }) => {
    const [searchText, setSearchText] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleCloseDropdownMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, [isMenuOpen]);

    const handleStateNameChange = (e) => {
        const proc = [15, 18, 20, 25];
        const item = proc.find((item) => {
            const count = (item / 100) * parseInt(total);
            if (Math.round(count) === parseInt(e)) {
                return item
            }
        });
        if (item) {
            const count = (item / 100) * parseInt(total);
            setSearchText(count?.toString());
            setTip(() => ({
                amountType: 1,
                amount: count || 0
            }));
        } else {
            setSearchText(e?.toString());
            setTip(() => ({
                amountType: 1,
                amount: e || 0
            }));
        }
    };

    const handleSelectOption = useCallback(({ label, value }: OptionType) => {
        if (value && total) {
            const afterCalc: number = (value / 100) * parseInt(total);
            setSearchText(afterCalc.toString());
            setTip(() => ({
                amountType: 1,
                amount: afterCalc.toFixed(2)
            }));
        }
        handleCloseDropdownMenu();
    }, [])

    return (
        <Container>
            <Row>
                <CustomInput
                    label="0%"
                    on={searchText}
                    value={searchText}
                    onInput={handleStateNameChange}
                    onFocus={() => setIsMenuOpen(true)}
                    onBlur={handleCloseDropdownMenu}
                />

                <ChevronDown
                    loader={imageLoader}
                    src={chevronDown}
                    alt="Our services"
                    onClick={() => setIsMenuOpen(true)}
                />
            </Row>

            <Select
                options={[
                    {
                        label: "15%",
                        value: 15,
                    },
                    {
                        label: "18%",
                        value: 18,
                    },
                    {
                        label: "20%",
                        value: 20,
                    },
                    {
                        label: "25%",
                        value: 25,
                    }
                ]}
                onSelect={handleSelectOption}
                isMenuOpen={isMenuOpen}
            />
        </Container>
    );
})

export default GratuitySelect