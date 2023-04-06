export const AIRPORT_TYPE = 2;

export const BOOKING_TYPE = {
    BY_DISTANCE: 1,
    HOURLY: 2,
    AIRPORT: 3,
};

export const MIN_HOURLY = 3;

export const BOOKING_STEPS = {
    BOOKING_FORM: 0,
    SELECT_VEHICLE: 1,
    RESERVATION_DETAIL: 2,
    PAYMENT_FORM: 3,
};

export const emptyStartEndLocations = [
    {
        address: '',
        coordinates: null,
        placeId: '',
        placeType: 0,
    },
    {
        address: '',
        coordinates: null,
        placeId: '',
        placeType: 0,
    },
];

export const bookingFormDefaultValues = {
    pickup: {
        locations: emptyStartEndLocations,
        date: null,
        time: '',
        meridiem: '',
    },
    returnPickup: {
        locations: emptyStartEndLocations,
        date: null,
        time: '',
        meridiem: '',
    },
    passengerCount: '1',
    isRoundTrip: false,
    isHourly: false,
    hoursCount: `${MIN_HOURLY}`,
    airline: null,
    flightNumber: '',
    luggageCount: '0',
    meetAndGreet: false,
};

export const paymentFormDefaultValues = {
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
    termAndPrivacy: false,
    agreement: false,
};
