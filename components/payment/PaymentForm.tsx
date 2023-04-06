import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Controller, useFormContext } from 'react-hook-form';
import { FormContainer as Container, Title, Row, InputContainer, StyledInput, Placeholder } from 'components/common/booking/styles';
import colors from 'constants/colors';
import creditCardType from 'credit-card-type';
import { isEmail } from 'helpers/validator';
import { mediaDevice } from 'helpers/responsiveUITools';
import PhoneNumberInput from 'components/common/PhonenumberInput';
import CardnumberInput from 'components/common/CardnumberInput';
import CardValidityInput from 'components/common/CardValidDateInput';
import CurrencyInput from 'react-currency-input-field';
import Input from './CurrencyInput';

const Subtitle = styled.span`
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	margin-left: 10px;
	color: ${colors.gray};

	${mediaDevice['smallScreen']`
		font-size: 10px;
		line-height: 12px;
		margin-left: 8px;
    `}
`;

const StyledContainer = styled(Container)`
    flex: 0.58;
	position: relative;

	${mediaDevice['smallScreen']`
        flex: 0.8;
		margin: 0 auto;
		margin-top: 30px;
    `}

	${mediaDevice['tablet']`
        flex: 1;
		margin-top: 30px;
    `}

	${mediaDevice['mobile']`
        flex: 1;
		box-shadow: none;
        margin-top: 0px;
        padding-top: 0px;
    `}

	overflow: auto;
`;

const CenteredRow = styled(Row)`
	margin-top: 20px;
	align-items: center;
`;

const PaymentForm = ({ invoiceDetail, handleChange = () => null }: { invoiceDetail: InvoiceDetailType | null, handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
	const { control, watch, formState: { errors } } = useFormContext();

	const cardNumber = watch('card.number');

	const cardTypeInfo = useMemo(() => {
		const [cardInfo] = creditCardType(cardNumber);
		return cardInfo;
	}, [cardNumber]);

	function getCVVLabel() {
		if (cardTypeInfo?.code?.name) {
			return cardTypeInfo?.code?.name;
		}

		return 'CVV / CVC';
	}

	function getCVVLength() {
		if (cardTypeInfo?.code?.size) {
			return cardTypeInfo?.code?.size;
		}

		return 3;
	}

	function getCardnumberFormat () {
		if (cardTypeInfo) {
			const [maxLength] = Array.from(cardTypeInfo.lengths).reverse();
			let resultFormat = '';

			for (let i = 0; i < maxLength; i++) {
				if (cardTypeInfo.gaps.includes(i)) {
					resultFormat += ' ';
				}

				resultFormat += '#';
			}

			return resultFormat;
		}

		return "#### #### #### ####";
	}

	function validateCVV(value) {
		if (value.length < getCVVLength()) {
			return `This field must be ${getCVVLength()} digits`;
		}
		if (isNaN(value)) {
			return 'This field accepts only number';
		}

		return true;
	}

	function validateCardNumber(value: string) {
		const rawValue = value.split('').filter((char) => char !== '_').join('').split(' ').join('');		

		if (!cardTypeInfo) {
			return 'Card number is invalid';
		}

		if (cardTypeInfo.lengths.length === 1) {
			const [validLength] = cardTypeInfo.lengths;

			if (rawValue.length !== validLength) {
				return `Card number length have to be ${validLength}`;
			}
		}

		if (cardTypeInfo.lengths.length === 2) {
			if (!cardTypeInfo.lengths.includes(rawValue.length)) {
				return `Card number length have to be of ${cardTypeInfo.lengths[0]} or ${cardTypeInfo.lengths[1]}`;
			}
		}

		if (cardTypeInfo.lengths.length > 2) {
			if (!cardTypeInfo.lengths.includes(rawValue.length)) {
				return `Card number length have to be one of ${cardTypeInfo.lengths.slice(0, -1).join(', ')} or ${cardTypeInfo.lengths[cardTypeInfo.lengths.length - 1]}`;
			}
		}

		return true;
	}

	return (
		<StyledContainer>
			<CenteredRow>
				<Title>Payment information</Title>
				<Subtitle>(All fields are required)</Subtitle>
			</CenteredRow>
			<Row>
				<InputContainer>
					<Controller
						name="passenger.firstname"
						control={control}
						render={({ field }) => (
							<StyledInput
								label="First name"
								errorMessage={errors['passenger']?.['firstname']}
								{...field}
								ref={null}
							/>
						)}

						rules={{
							validate: {
								valid: (v: string) => v.trim().length > 0 ? true : 'First name is required',
							}
						}}
					/>
				</InputContainer>
				<Placeholder />
				<InputContainer>
					<Controller
						name="passenger.lastname"
						control={control}
						render={({ field }) => (
							<StyledInput
								label="Last name"
								errorMessage={errors['passenger']?.['lastname']}
								{...field}
								ref={null}
							/>
						)}

						rules={{
							validate: {
								valid: (v: string) => v.trim().length > 0 ? true : 'Last name is required',
							}
						}}
					/>
				</InputContainer>
			</Row>
			<InputContainer>
				<Controller
					name="passenger.email"
					control={control}
					render={({ field }) => (
						<StyledInput
							label="Email"
							type="email"
							errorMessage={errors['passenger']?.['email']}
							{...field}
							ref={null}
						/>
					)}

					rules={{
						required: "Email is required",
						validate: {
							valid: (v: string) => isEmail(v) ? true : 'Invalid email',
						}
					}}
				/>
			</InputContainer>
			<InputContainer>
				<Controller
					name="passenger.phoneNumber"
					control={control}
					render={({ field }) => (
						<PhoneNumberInput
							label="Phone number"
							errorMessage={errors['passenger']?.['phoneNumber']}
							{...field}
							ref={null}
						/>
					)}

					rules={{
						required: "Phone number is required",
						validate: {
							valid: (v: string) => v.includes('_') ? 'Required phone number format +X (XXX) XXX-XXXX' : true,
						}
					}}
				/>
			</InputContainer>
			<InputContainer>
				<Controller
					name="card.number"
					control={control}
					render={({ field }) => (
						<CardnumberInput
							label="Card number"
							format={getCardnumberFormat()}
							errorMessage={errors['card']?.['number']}
							{...field}
							ref={null}
						/>
					)}

					rules={{
						required: "Card number is required",
						validate: {
							valid: validateCardNumber,
						}
					}}
				/>
			</InputContainer>
			<Row>
				<InputContainer>
					<Controller
						name="card.expirationDate"
						control={control}
						render={({ field }) => (
							<CardValidityInput
								label="Expiration date"
								errorMessage={errors['card']?.['expirationDate']}
								{...field}
								ref={null}
							/>
						)}

						rules={{
							required: "Expiration date is required",
							validate: {
								valid: (v: string) => v.length < 5 ? 'Mandatory time format mm/yy' : true,
							}
						}}
					/>
				</InputContainer>
				<Placeholder />
				<InputContainer>
					<Controller
						name="card.cvv"
						control={control}
						render={({ field }) => (
							<StyledInput
								label={getCVVLabel()}
								type="password"
								errorMessage={errors['card']?.['cvv']}
								{...field}
								maxLength={getCVVLength()}
								ref={null}
							/>
						)}

						rules={{
							required: "Security code is required",
							validate: {
								valid: validateCVV,
							}
						}}
					/>
				</InputContainer>
			</Row>
			{
				invoiceDetail?.allowTip ? (
					<InputContainer>
						<Controller
							name="passenger.tipAmount"
							control={control}
							render={({ field }) => (
								<Input
									label="Gratuity"
									type="number"
									errorMessage={errors['passenger']?.['tipAmount']}
									onInput={handleChange}
									{...field}
									ref={null}
								/>
							)}

							rules={{
								required: false
							}}
						/>
					</InputContainer>
				) : (
					null
				)
			}
		</StyledContainer>
	);
};

export default PaymentForm;
