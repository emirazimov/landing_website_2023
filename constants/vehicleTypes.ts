import sedan from 'public/vehicleImages/sedan.png';
import suv from 'public/vehicleImages/suv.png';
import miniBus from 'public/vehicleImages/mini-bus.png';
import firstClassSedan from 'public/vehicleImages/firstclass-sedan.png';
import limo from 'public/vehicleImages/limo.png';
import { IVehicleType } from '../vehicles';

export const vehicleTypes = {
    SEDAN: 'Sedan',
    SUV: 'SUV',
    MINI_BUS: 'Mini bus',
    LIMO: 'Limousine',
	FIRST_CLASS_SEDAN: 'First class sedan',
};

export const vehicleIds = {
    SEDAN: 1,
    SUV: 2,
    MINI_BUS: 3,
    LIMO: 4,
	FIRST_CLASS_SEDAN: 5,
};

export const vehicles: IVehicleType [] = [
    {
        type: vehicleTypes.SEDAN,
        capacity: 3,
        image: sedan,
        id: vehicleIds.SEDAN,
        price: 0,
    },
    {
        type: vehicleTypes.SUV,
        capacity: 6,
        image: suv,
        id: vehicleIds.SUV,
        price: 0,
    },
	{
        type: vehicleTypes.FIRST_CLASS_SEDAN,
        capacity: 3,
        image: firstClassSedan,
        id: vehicleIds.FIRST_CLASS_SEDAN,
        price: 0,
    },
    {
        type: vehicleTypes.MINI_BUS,
        capacity: 12,
        image: miniBus,
        id: vehicleIds.MINI_BUS,
        price: 0,
    },
    // {
    //     type: vehicleTypes.LIMO,
    //     capacity: 10,
    //     image: limo,
    //     id: vehicleIds.LIMO,
    //     price: 0,
    // }
];
