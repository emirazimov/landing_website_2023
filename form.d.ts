
interface ICoordinates {
    latitude: number,
    longitude: number,
}
interface ILocation {
    address: string;
    coordinates: ICoordinates;
    placeId: string;
    placeType: number;
}
interface IFormState {
    pickup: {
        locations: ILocation[];
        date: date;
        time: string;
        meridiem: string;
    };
    returnPickup: {
        locations: {
            address: string;
            coordinates: ICoordinates;
            placeId: string;
            placeType: number;
        }[];
        date: data;
        time: string;
        meridiem: string;
    }
    passengerCount: string,
    isRoundTrip: boolean,
    isHourly: boolean,
    hoursCount: string,
    airline: string,
    flightNumber: string,
    luggageCount: string,
    meetAndGreet: boolean,
}

type IFormErrors = Partial<FieldErrorsImpl<IFormState>>

type IFormWatch = UseFormWatch<IFormState>

type IFormTrigger = UseFormTrigger<IFormState>


type StaticImageData = {
    src: string;
    height: number;
    width: number;
    placeholder?: string;
};
