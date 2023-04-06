import { IVehicleType } from '../vehicles';
import { SERVER_URL, getPostRequestOptions, requestKey } from './index';

export const makeReservation = async (requestData): Promise<[Error, IVehicleType]> => {
	try {
		const response = await fetch(`${SERVER_URL}/reservation/web/${requestKey}`, getPostRequestOptions(requestData));
		const data = await response.json();
		if (response.ok === false) {
			throw new Error(data.join(' '));
		}

		return [null, data];
	} catch (error) {
		return [error, null];
	}
};

export const getStateList = async (): Promise<IState[]> => {
	try {
		const response = await fetch(`${SERVER_URL}/place/states`);

		return response.json();
	} catch (error) {
	}
};

export const getCityList = async (cityId: string): Promise<ICity[]> => {
	try {
		const response = await fetch(`${SERVER_URL}/place/cities/${cityId}`);

		return response.json();
	} catch (error) {
	}
};

export const contactUs = async ({ email, firstname, lastname, details, phonenumber }): Promise<[Error, boolean]> => {
	const additionalData = {
		company: {
			businessName: 'From client website',
			email,
			firstName: firstname,
			lastName: lastname,
			message: details,
			phone: phonenumber,
		},
		isContactUs: true,
	};
	try {
		const response = await fetch(`${SERVER_URL}/contacts`, getPostRequestOptions(additionalData));
		
		if (response.ok === false) {
			throw new Error('Something went wrong, our team is already working on it, please try again later');
		}

		return [null, true];
	} catch (error) {
		return [error, null];
	}
};