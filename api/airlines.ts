import { SERVER_URL } from './index';

export const getAirlineNames = async (queryAirlinesName: string): Promise<any>  => {
    try {
        const response = await fetch(`${SERVER_URL}/place/airlines?search=${queryAirlinesName}`);

        return response.json();
    } catch (error) {
    }
};
