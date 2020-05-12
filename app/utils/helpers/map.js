import * as geolib from 'geolib';
import R from 'ramda';

export const getCenterBetweenTwoLocations = (location1, location2) => ({
  latitude: (location1.latitude + location2.latitude) / 2,
  longitude: (location1.longitude + location2.longitude) / 2
});

export const createAddDelta = (latitudeDelta, longitudeDelta) => (location) => ({
  ...location,
  latitudeDelta,
  longitudeDelta
});

export const createCoords = (currentLocation) => (
  currentLocation ? ({
    lat: R.pathOr(null, ['latitude'], currentLocation),
    lng: R.pathOr(null, ['longitude'], currentLocation)
  }) : null
);

export const ratio = {
  mile: 1609.34,
  km: 1000,
  m: 1
};

export const getDistance = (
  location, currentLocation, measurement = 'mile'
) => {
  if (!currentLocation || !location) {
    return null;
  }

  const meters = geolib.getDistance(location, currentLocation);
  return meters / ratio[measurement];
};

export const getDistanceMileFeetString = (location, currentLocation) => {
  const distance = getDistance(location, currentLocation);
  if (!R.is(Number, distance)) {
    return null;
  }
  if (distance <= 0.1) {
    return `${Math.round(distance * 5280)} ft`;
  }
  if (distance >= 10) {
    return `${Math.round(distance)} mi`;
  }
  return `${distance.toFixed(1)} mi`;
};
