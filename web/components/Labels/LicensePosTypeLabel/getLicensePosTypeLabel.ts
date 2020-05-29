const licensePosTypeMap = {
  greenbits: 'GREENBITS',
  biotrackthc: 'BIOTRACKTHC',
  adilas: 'ADILAS',
  flowhub: 'FLOWHUB',
  mj_freeway: 'MJFREEWAY',
  leaf_logix: 'LEAF LOGIX',
  thsuite: 'Thsuite',
  other: 'OTHER',
  manual: 'MANUAL'
};

export const getLicensePosTypeLabel = (name) => licensePosTypeMap[name] || name;
