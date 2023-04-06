import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { displayToast } from 'helpers/toast';
import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/router'
import { mediaDevice } from 'helpers/responsiveUITools';
import Spinner from 'components/common/SimpleSpinner';

import { getInvoiceDetail, payForInvoice } from 'api/invoice';
import InvoceDetail from 'components/payment/InvoceDetail';
import PaymentForm from 'components/payment/PaymentForm';
import { Toaster } from 'react-hot-toast';
import Button from 'components/common/Button';

const Container = styled.div`
    padding-top: 80px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    

    ${mediaDevice['mobile']`
        flex-direction: column-reverse;
        padding-bottom: 50px;
        box-shadow: 0px 4px 20px #E1E6EA;
        border-radius: 20px;
    `}
`;

const SubmitButton = styled(Button)`
    margin-top: 40px;
    align-self: center;
`;

const paymentFormDefaultValues = {
    passenger: {
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
    },
    card: {
        number: '',
        expirationDate: '',
        cvv: '',
    },
};


const Payment = () => {
    const [invoiceDetail, setInvoiceDetail] = useState<InvoiceDetailType | null>(null);
    const [isRequestInprogress, setIsRequestInprogress] = useState(false);
    const [isRequesSuccssed, setIsRequestSuccssed] = useState(false);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [tips, setTips] = useState(0);
    const router = useRouter();

    const { paymentId } = router.query;

    const paymentFormMethods = useForm({
        defaultValues: paymentFormDefaultValues,
    });

    useEffect(() => {
        if (paymentId) {
            fetchInvoceDetail(paymentId as string);
        }
    }, [paymentId]);

    async function fetchInvoceDetail(paymentId: string) {
        const [err, result] = await getInvoiceDetail(paymentId);

        if (err) {
            return displayToast({ message: err.message, type: 'error', id: 'invoiceError' });
        }

        setInvoiceDetail(result);
        setTotalAmount(result?.invoiceReservationInfo?.total || 0);
    }

    function handleResetForm() {
        paymentFormMethods.reset();
        setIsRequestSuccssed(false);
    }

    async function handleSubmitPaymentForm(values) {
        if (isRequestInprogress) {
            return null;
        }

        setIsRequestInprogress(true);
        const requestData = {
            ...values.passenger,
            tipAmount: tips,
            cvc: values.card.cvv,
            cardNumber: values.card.number.replace(/\s/g, ""),
            expirationDate: values.card.expirationDate,
            paymentId,
        };

        const [error, response] = await payForInvoice(requestData);
        if (error) {
            displayToast({ message: error.message, type: 'error', duration: 5000, id: 'invoicePayment' });
        } else {
            displayToast({ message: 'Payment is successfully processed', type: 'success', duration: 5000, id: 'invoicePayment' });
            setIsRequestSuccssed(true);
        }
        setIsRequestInprogress(false)
    }

    function renderButton() {
        if (isRequesSuccssed) {
            return <SubmitButton onClick={handleResetForm}>Ok</SubmitButton>;
        }

        return (
            <SubmitButton onClick={paymentFormMethods.handleSubmit(handleSubmitPaymentForm)}>
                <>
                    {isRequestInprogress && <Spinner />}
                    {`Pay ${totalAmount || ''}`}
                </>
            </SubmitButton>
        );
    }

    function handleChangeForm(e) {
        const tipsCount = parseInt(e);
        
        if (tipsCount) {
            setTips(tipsCount);
        } else { 
            setTips(0)
        }

        if (invoiceDetail?.invoiceReservationInfo?.total && tipsCount) {
            const total = invoiceDetail?.invoiceReservationInfo?.total + tipsCount;
            setTotalAmount(total);
        } else if (invoiceDetail?.invoiceReservationInfo?.total) {
            setTotalAmount(invoiceDetail?.invoiceReservationInfo?.total);
        }
    }

    return (
        <Container className='container'>
            <Toaster />
            <Content>
                <FormProvider {...paymentFormMethods} >
                    <PaymentForm invoiceDetail={invoiceDetail} handleChange={handleChangeForm} />
                </FormProvider>
                <InvoceDetail invoiceDetail={{...invoiceDetail, total: totalAmount} as any} tips={tips} />
            </Content>
            {renderButton()}
        </Container>
    );
};

export default Payment;