const licenseTypeMap = {
  med: 'Med',
  rec: 'Rec'
};

export const getLicenseTypeLabel = (name) => licenseTypeMap[name] || name;
