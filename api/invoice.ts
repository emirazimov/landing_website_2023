import { SERVER_URL, getPostRequestOptions, requestKey } from './index';

export const getInvoiceDetail = async (invoiceId: string): Promise<[Error, InvoiceDetailType]> => {
	try {
		const response = await fetch(`${SERVER_URL}/invoice/checkout/${invoiceId}`);

		const data = await response.json();

        if (response.ok === false) {
            throw new Error(data[0]);
        }

        return [null as any, data];
	} catch (error) {
        return [error, null as any];
	}
};

export const payForInvoice = async ({ email, firstname, lastname, phoneNumber, paymentId, cardNumber, cvc, expirationDate, tipAmount }): Promise<[Error, boolean]> => {
    const [month, year] = expirationDate.split('/');
	const additionalData = {
        email,
        firstName: firstname,
        lastName: lastname,
        phone: phoneNumber,
        cardNumber,
        cvc, 
        year,
        month,
        tipAmount: tipAmount || 0,
        paymentId: parseInt(paymentId),
	};
	try {
		const response = await fetch(`${SERVER_URL}/invoice/checkout/${paymentId}`, getPostRequestOptions(additionalData));

		if (response.ok === false) {
			const data = await response.json();
			throw new Error(data[0]);
		}

		return [null as any, true];
	} catch (error) {
		return [error, null as any];
	}
};
