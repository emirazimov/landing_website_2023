export const prepareLocationsRequestData = (locations) => {
    const filteredLocationsWithPlaceId = locations.filter((item) => !!item.placeId);

	if (filteredLocationsWithPlaceId.length < 2) {
		return [];
	}

    return filteredLocationsWithPlaceId.map((locationItem) => ({
        rideCheckPoint: locationItem.address,
        latitude: locationItem.coordinates.latitude,
        longitude: locationItem.coordinates.longitude,
        placeId: locationItem.placeId,
        placeType: locationItem.placeType,
    }));
};
