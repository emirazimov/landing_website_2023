import React, { forwardRef, Ref } from 'react';
import styled from 'styled-components';
import colors from 'constants/colors';
import { mediaDevice } from 'helpers/responsiveUITools';

const Container = styled.div`
	flex: 1;
`;

const InputContainer = styled.div`
	height: 60px;
	width: 100%;
	padding: 0px 20px;
	position: relative;
	display: flex;
	align-items: center;
	background: ${colors.ivoryWeb};
	border-radius: 10px;
	border: 1px solid ${(props: { haserror: boolean }) => props.haserror ? colors.red : 'transparent'};

	${mediaDevice['mobile']`
		background: ${colors.ivoryMobile};
	`}
`;

const Content = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Label = styled.label`
	font-size: 14px;
	font-weight: normal;
	line-height: 17px;
	color: ${colors.grayInactiveWeb};
	order: 1;
	pointer-events: none;
	text-shadow: none;
	transform-origin: left top;
	transform: scale(1) translate3d(0, 22px, 0);
	transition: 200ms ease all;

	${mediaDevice['mobile']`
		color: ${colors.grayInactiveMobile};
	`}
`;

const StyledInput = styled.input`
	display: flex;
	text-shadow: none;
	font-weight: 500;
	height: 100%;
	font-size: 14px;
	line-height: 17px;
	background: inherit;
	border-radius: inherit;
	border: 0;
	width: 100%;
	color: #000;
	flex: 1 1 auto;
	order: 2;

	// Float Label style

	&:focus {
		outline: 0;
	}

	input[value=""] {
		&:not(:focus) {
			color: transparent;
		}
	}

	::placeholder {
	    color: ${colors.grayPlaceholder};
	    opacity: 1;
	}

	:not(:focus) {
	    &::placeholder {
	        opacity: 0;
	    }
	}

	:not(input[value=""]) {
		outline: 0;
	}

	&:focus + ${Label} {
		transform: scale(0.8) translate3d(0px, 15px, 0);
	}

	:not(input[value=""]) + ${Label} {
		transform: scale(0.8) translate3d(0px, 15px, 0);
	}

	// Hide number arrows style
	::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
`;

const ErrorMessage = styled.span`
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	color: ${colors.red};
`;

interface Props {
	type?: React.HTMLInputTypeAttribute,
	label: string,
	name?: string,
	placeholder?: string,
	className?: string,
	value?: string | number | undefined,
	defaultValue?: string | number,
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
	onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void,
	onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	readonly?: boolean,
	errorMessage?: { message: string } | Record<string, any>,
	renderExtra?: () => JSX.Element,
	maxLength?: number,
}

const Input = forwardRef(({
	type = 'text', readonly = false, label, className, value, onBlur, errorMessage,
	onChange, onFocus, renderExtra, defaultValue, placeholder, ...props
}: Props, ref?: Ref<HTMLInputElement> | null) => {
	return (
		<Container>
			<InputContainer className={className} haserror={!!errorMessage}>
				<Content>
					<StyledInput
						id={label?.split(" ").join("")}
						type={type}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
						defaultValue={defaultValue}
						readOnly={readonly}
						onFocus={onFocus}
						placeholder={placeholder}
						aria-label={label}
						ref={ref}
						{...props}
						autoComplete="off"
					/>
					<Label>{label}</Label>
				</Content>
				{renderExtra && renderExtra()}
			</InputContainer>
			{errorMessage && <ErrorMessage>{errorMessage?.message}</ErrorMessage>}
		</Container>
	);
});

export default Input;
