const licenseSubTypeMap = {
  processor: 'Processor',
  dispensary: 'Dispensary',
  grow: 'Grow'
};

export const getLicenseSubTypeLabel = (name) => licenseSubTypeMap[name] || name;
