const frequencyLabelMap = {
  annual: 'Annual',
  'one-time': 'One-time',
  'semi-annual': 'Semi-annual',
  every_2_years: 'Every 2 Years'
};

export const getFrequencyLabel = (name) => frequencyLabelMap[name] || name;
