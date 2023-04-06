import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from 'components/common/SectionTitle';
import { Controller, useForm } from 'react-hook-form';
import { displayToast } from 'helpers/toast';
import { mediaDevice } from 'helpers/responsiveUITools';
import Spinner from 'components/common/SimpleSpinner';
import { isMobile } from 'helpers/responsiveUITools';
import useWindowSize from 'components/hooks/useWindowSize';
import Input from 'components/common/input';
import Button from 'components/common/Button';
import { isEmail } from 'helpers/validator';
import PhoneNumberInput from 'components/common/PhonenumberInput';
import { contactUs } from 'api/reservation';
import { PAGE_BLOCKS } from 'constants/routes';

declare global {
    interface Window { dataLayer: any[]; }
}

const Container = styled.div`
    margin-top: 180px;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    padding: 10px 30px 30px 30px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px #E1E6EA;
    border-radius: 20px;


    ${mediaDevice['mobile']`
        margin-top: 30px;
        padding: 8px 16px 16px 16px;
    `}
`;

const StyledSectionTitle = styled(SectionTitle)`
    text-align: center;

    ${mediaDevice['mobile']`
        text-align: inherit;
    `}
`;

const CenteredRow = styled.div`
    display: flex;

    ${mediaDevice['mobile']`
        margin-top: 0px;
    `}
`;

const Placeholder = styled.div`
    height: 100%;
    width: ${({ width = 10 }: { width?: number }) => width}px;
`;

const InputContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex: 1;

    ${mediaDevice['mobile']`
        margin-top: 8px;
    `}
`;

const StyledInput = styled(Input)`
    flex: 1;
`;

const SubmitButton = styled(Button)`
    width: 160px;
    margin-top: 30px;
    align-self: center;

    ${mediaDevice['mobile']`
        width: 100%
    `}
`;

const CenteredContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContactUs = () => {
    const [isRequestInprogress, setIsRequestInprogress] = useState(false);
    const [isRequesSuccssed, setIsRequestSuccssed] = useState(false);
    const windowSize = useWindowSize();
    const { control, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstname: '',
            lastname: '',
            email: '',
            phonenumber: '',
            details: '',
        },
    });

    function handleResetForm() {
        reset();
        setIsRequestSuccssed(false);
    }

    async function handleSubmitContactInfromation(values) {
        if (isRequestInprogress) {
            return null;
        }

        setIsRequestInprogress(true);

        const [error, response] = await contactUs(values);
        if (error) {
            displayToast({ message: error.message, type: 'error', duration: 5000, id: 'ContactUS' });
        } else {
			window?.dataLayer?.push({'event': 'contact us_send_ok'});
            displayToast({ message: 'The application is successfully submitted', type: 'success', duration: 5000, id: 'ContactUS' });
            setIsRequestSuccssed(true);
        }
        setIsRequestInprogress(false)
    }

    function renderEmailAndPhoneInput() {
        if (isMobile(windowSize.width)) {
            return (
                <>
                    <InputContainer>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <StyledInput
                                    label="Email"
                                    readonly={isRequesSuccssed}
                                    {...field}
                                    errorMessage={errors['email']}
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
                            name="phonenumber"
                            control={control}
                            render={({ field }) => (
                                <PhoneNumberInput
                                    label="Phone number"
                                    readonly={isRequesSuccssed}
                                    errorMessage={errors['phonenumber']}
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
                </>
            );
        }

        return (
            <CenteredRow>
                <InputContainer>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <StyledInput
                                label="Email"
                                readonly={isRequesSuccssed}
                                {...field}
                                errorMessage={errors['email']}
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
                <Placeholder />
                <InputContainer>
                    <Controller
                        name="phonenumber"
                        control={control}
                        render={({ field }) => (
                            <PhoneNumberInput
                                label="Phone number"
                                readonly={isRequesSuccssed}
                                errorMessage={errors['phonenumber']}
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
            </CenteredRow>
        );
    }

    function renderButton() {
        if (isRequesSuccssed) {
            return <SubmitButton onClick={handleResetForm}>Ok</SubmitButton>;
        }

        return (
            <SubmitButton onClick={handleSubmit(handleSubmitContactInfromation)}>
                <CenteredContainer>
                    {isRequestInprogress && <Spinner />} Submit
                </CenteredContainer>
            </SubmitButton>
        );
    }

    return (
        <Container id={PAGE_BLOCKS.CONTACT_US}>
            <StyledSectionTitle>Planning an event or a custom trip?</StyledSectionTitle>
            <StyledSectionTitle>Contact us</StyledSectionTitle>
            <FormContainer>
                <CenteredRow>
                    <InputContainer>
                        <Controller
                            name="firstname"
                            control={control}
                            render={({ field }) => (
                                <StyledInput
                                    label="First name"
                                    readonly={isRequesSuccssed}
                                    errorMessage={errors['firstname']}
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
                            name="lastname"
                            control={control}
                            render={({ field }) => (
                                <StyledInput
                                    label="Last name"
                                    readonly={isRequesSuccssed}
                                    errorMessage={errors['lastname']}
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
                </CenteredRow>
                {renderEmailAndPhoneInput()}
                <InputContainer>
                    <Controller
                        name="details"
                        control={control}
                        render={({ field }) => (
                            <StyledInput
                                label="Details"
                                readonly={isRequesSuccssed}
                                {...field}
                                ref={null}
                            />
                        )}
                    />
                </InputContainer>
                {renderButton()}
            </FormContainer>
        </Container>
    );
};

export default ContactUs;