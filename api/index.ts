// Touch only if you know what are you doing

export const SERVER_URL = process.env.ENV === 'production' ? 'https://api.bookinglane.com/api' : 'https://mgrdev2.bookinglane.com/api';
export const requestKey = process.env.ENV === 'production' ? '6129164e-d0b0-48ee-85c3-26733cf42806' : '14862f6b-0e7a-47d0-810a-06a348fd9ec1';

export const getPostRequestOptions = (data = {}) => (
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }
);
