import { keyBy, includes, isEqual, pick, map, round } from 'lodash';

export const receiptPaymentTypes = ['personal_payment_card', 'business_payment_card'];

export const paymentTypeLabels = {
  passenger_payment_card: 'Passenger\'s card',
  personal_payment_card: 'Passenger\'s Personal card',
  business_payment_card: 'Passenger\'s Business card',
  account: 'Account',
  cash: 'Cash',
  company_payment_card: 'Company Payment Card'
};

export function paymentTypeToAttrs(value) {
  // a value of form 'personal_payment_card:13' represents a payment method 'personal_payment_card'
  // with a payment card with id 13
  const match = value && value.match(/^((?:personal|business|passenger)_payment_card):(\d+)$/);

  if (match) {
    const [paymentMethod, paymentCardId] = match.slice(1);

    return { paymentType: value, paymentMethod, paymentCardId: +paymentCardId };
  } if (value) {
    return { paymentType: value, paymentMethod: value, paymentCardId: null };
  }

  return { paymentType: null, paymentMethod: null, paymentCardId: null };
}

export const allVehicles = [{
  name: 'Standard',
  label: 'Standard'
}, {
  name: 'BlackTaxi',
  label: 'Black Taxi'
}, {
  name: 'OTBlackTaxi',
  label: 'Black Taxi'
}, {
  name: 'BlackTaxiXL',
  label: 'Black Taxi XL'
}, {
  name: 'OTBlackTaxiXL',
  label: 'Black Taxi XL'
}, {
  name: 'Exec',
  label: 'Executive'
}, {
  name: 'MPV',
  label: 'People Carrier'
}, {
  name: 'Courier',
  label: 'Courier'
}, {
  name: 'Special',
  label: 'Special'
}, {
  name: 'GettXL',
  label: 'Gett XL'
}, {
  name: 'GettExpress',
  label: 'Gett Express'
}, {
  name: 'Economy',
  label: 'Economy'
}, {
  name: 'StandardXL',
  label: 'Standard XL'
}, {
  name: 'Business',
  label: 'Business'
}, {
  name: 'Chauffeur',
  label: 'Chauffeur'
}, {
  name: 'BabySeat',
  label: 'Baby seat'
}, {
  name: 'Wheelchair',
  label: 'WAV'
}];

export const OTcars = [
  'Standard', 'Exec', 'MPV', 'BlackTaxiOT', 'OTBlackTaxi'
];

export const splytCars = [
  'BabySeat', 'Wheelchair'
];

export const vehiclesOrders = {
  now: ['Standard', 'BlackTaxi', 'Exec', 'MPV', 'BlackTaxiXL'],
  preBook: ['Standard', 'BlackTaxi', 'MPV', 'BlackTaxiXL', 'Exec']
};

export const preBookCars = [
  'Standard', 'Exec', 'MPV'
];

export function sortVehicles(vehicles, scheduledType = 'now') {
  const order = vehiclesOrders[scheduledType];
  const other = vehicles.filter(vehicle => !order.includes(vehicle.name));
  const sortedCars = order.map(name => vehicles.find(vehicle => vehicle.name === name)).filter(Boolean);

  return [...sortedCars, ...other].sort((a, b) => a.prebook - b.prebook);
}

export const vehiclesInfo = keyBy(allVehicles, 'name');

export const backOfficeBaseVehicles = allVehicles.filter(v => (
  !['Courier', 'OTBlackTaxi', 'OTBlackTaxiXL'].includes(v.name)
));
export const baseVehicles = backOfficeBaseVehicles.filter(v => v.name !== 'Special');

/* eslint-disable max-len */
const priceInfo = 'Excluding VAT & fees. The final price may increase should the final destination be amended after the journey has started. If additional stops are added or the free waiting time is exceeded.';

const Standard = {
  description: 'Safe and reliable saloon vehicle that is perfect for your everyday ground transport needs.',
  features: [
    '15 minutes free waiting time',
    '30 minutes free waiting time for airport pickups'
  ],
  price: priceInfo
};

const BlackTaxiXL = {
  description: 'A comfortable ride that takes bus lanes to get you there quicker.',
  features: [
    '2 minutes free waiting time and then 50p/min',
    '15 mins free waiting time for airport pickups'
  ],
  price: priceInfo
};

export const baseDescriptions = {
  Standard,
  BlackTaxi: {
    description: 'A Comfortable ride that takes bus lanes to get you there quicker',
    features: [
      '2 minutes free waiting time and then 50p/min',
      '15 mins free waiting time for airport pickups'
    ],
    price: priceInfo
  },
  BlackTaxiXL,
  Exec: {
    description: 'The perfect balance between luxury and reliability, our executive services will ensure you arrive in style.',
    features: [
      '5 minutes free waiting time',
      '30 minutes free waiting time for airport pickups'
    ],
    price: priceInfo
  },
  MPV: {
    description: 'Spacious and comfortable with ample space for luggage. The People Carrier is ideal for long distance journeys.',
    features: [
      '15 minutes free waiting time',
      '30 minutes free waiting time for airport pickups'
    ],
    price: priceInfo
  },
  BabySeat: { ...Standard, description: `${Standard.description} (Child seat provided in the car)` },
  Wheelchair: { ...BlackTaxiXL, description: 'A car that accepts a reference wheelchair.' }
};
/* eslint-enable */

export const baseVehiclesDescriptions = {
  Standard: baseDescriptions.Standard,
  BlackTaxi: baseDescriptions.BlackTaxi,
  BlackTaxiXL: baseDescriptions.BlackTaxiXL,
  Exec: baseDescriptions.Exec,
  MPV: baseDescriptions.MPV,
  Economy: baseDescriptions.Standard,
  StandardXL: baseDescriptions.MPV,
  Business: baseDescriptions.Exec,
  GettXL: baseDescriptions.MPV,
  GettExpress: baseDescriptions.Standard,
  Chauffeur: baseDescriptions.Standard,
  BabySeat: baseDescriptions.BabySeat,
  Wheelchair: baseDescriptions.Wheelchair
};

// comparing looked-up address with saved address can sometimes yield different
// results for lat and lng e.g. 3.413240000000001 and 3.41324
const precision = 6;

function comparableProps(address) {
  const props = ['line', 'lat', 'lng'];
  const toRoundProps = ['lat', 'lng'];
  const addressProps = pick(address, props);

  return map(addressProps, (value, key) => (
    includes(toRoundProps, key) ? round(value, precision) : value
  ));
}

function haveSameProps(address, otherAddress) {
  return isEqual(comparableProps(address), comparableProps(otherAddress));
}

export function isEqualAddressPair(address, otherAddress) {
  return address && otherAddress && haveSameProps(address, otherAddress);
}

export function areUniqueAddresses(addresses) {
  return addresses.every((address, index) => {
    const previous = index ? addresses[index - 1] : null;

    return !isEqualAddressPair(address, previous);
  });
}
