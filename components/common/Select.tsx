import React from 'react';
import ReactSelect from 'react-select';
import colors from 'constants/colors';

const InvisibleInput = () => null;


const getMenuStyle = (baseStyles, state) => ({
	...baseStyles,
	backgroundColor: '#fff',
	borderRadius: '10px',
	boxShadow: '0px 4px 10px #C1C6CB',
	marginBottom: '10px',
	marginTop: '10px',
});

const getMenuListStyle = (baseStyles, state) => ({
	...baseStyles,
	padding: '10px 0px',
	maxHeight: '220px',
	height: 'fit-content',
});

const getOptionStyle = (baseStyles, state) => ({
	...baseStyles,
	cursor: 'pointer',
	fontWeight: 500,
	fontSize: '12px',
	lineHeight: '15px',
	padding: '8px 20px',
	backgroundColor: state.isFocused ? colors.ivoryWeb : '#fff',
	color: '#000',
});

type OptionType = {
    value: any,
    label: string,
}

type Props = {
    options: OptionType[],
    onSelect: (option: OptionType) => void,
    isMenuOpen: boolean,
	id?: string,
}

const Select = ({ options, onSelect, isMenuOpen, id = "select" }: Props) => {
    return (
        <ReactSelect
			id={id}
            onChange={onSelect}
            options={options}
			menuShouldScrollIntoView={false}
			styles={{
				menu: getMenuStyle,
				menuList: getMenuListStyle,
				option: getOptionStyle,
			}}
            components={{ Control: InvisibleInput,  }}
            menuIsOpen={isMenuOpen}
        />
    );
};

export default Select;
