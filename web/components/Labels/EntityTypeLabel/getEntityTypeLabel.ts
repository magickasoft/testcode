const entityTypeMap = {
  sole_proprietor: 'Sole Proprietor',
  corporation: 'Corporation',
  llc: 'LLC'
};

export const getEntityTypeLabel = (name) => entityTypeMap[name] || name;
