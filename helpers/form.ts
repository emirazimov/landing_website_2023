export const getFormattedSubmitDate = ({ date, time, meridiem }: { date: Date, time: string, meridiem: string }) => {
    if (!date) {
        return '';
    }

    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${time} ${meridiem}`;
};

function getPrefixZero(value: number) {
    if (value < 10) {
        return `0${value}`;
    }

    return value;
}

export const getFormattedDateWithZeroPreffix = (date?: Date | null) => {
    if (!date) {
        return '--/--/----';
    }

    return `${getPrefixZero(date.getMonth() + 1)}/${getPrefixZero(date.getDate())}/${date.getFullYear()}`;
};

export const getFormattedDateWithZeroPreffixStringDate = (dateString?: string | null) => {
    if (!dateString) {
        return '--/--/----';
    }

    const date = new Date(dateString);

    return `${getPrefixZero(date.getMonth() + 1)}/${getPrefixZero(date.getDate())}/${date.getFullYear()}`;
};

export const getFormattedTimeFromDateString = (dateString?: string | null) => {
    if (!dateString) {
        return '--:--';
    }

    const date = new Date(dateString);

    return `${getPrefixZero(date.getHours())}:${getPrefixZero(date.getMinutes())} ${date.getHours()  > 11 ? 'PM' : 'AM'}`;
};


export const getFormattedSubmitLocations = (locations: ILocation[]) => {
    return locations.map((location) => ({
        rideCheckPoint: location.address,
        latitude: location.coordinates.latitude,
        longitude: location.coordinates.longitude,
        placeId: location.placeId,
        placeType: location.placeType
    }));
};

export const kurutKurzunDev = () => window?.btoa('\x02¸\x9E´Ü¬\x85©Ûië');
