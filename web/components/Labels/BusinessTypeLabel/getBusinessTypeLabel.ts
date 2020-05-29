const businessTypeMap = {
  mrb: 'MRB',
  mrb_related: 'MRB Related'
};

export const getBusinessTypeLabel = (name) => businessTypeMap[name] || name;
