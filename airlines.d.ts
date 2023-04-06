interface IAirline {
    id: number,
    name: string,
    code?: string,
    code3Letter?: string,
}

interface IState {
    id: number,
    code: string,
    name: string,
}

interface ICity {
    id: number,
    latitude: number,
    longitude: number,
    name: string,
    stateId: number
}