import { IVehicleType } from '../vehicles';
import { SERVER_URL, getPostRequestOptions, requestKey } from './index';

export const getFleetlistWithPrices = async (requestData): Promise<[IVehicleType[], Error]>  => {
    try {
        const response = await fetch(`${SERVER_URL}/widget/cars-with-price/${requestKey}`, getPostRequestOptions(requestData));
        const data = await response.json();

        if (response.ok === false) {
            throw new Error("Please make sure you selected right locations");
        }

        return [data, null];
    } catch (error) {
        return [null, error];
    }
};
