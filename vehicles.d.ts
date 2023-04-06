export interface IVehicleType {
    id: number,
    type: string,
    capacity: number,
    image: StaticImageData,
    price: number,
    transactionFee?: number,
    reservationId?: number | string,
}   
