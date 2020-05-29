export const tableSelector = (data: any) => {
  if (!data) {
    return [];
  }

  return data.companies.value.records.map((record) => ({
    id: record.id,
    name: record.name,
    phone: record.phone,
    dba: record.dba,
    active: record.active,
    customer_status: record.customer_status,
    entity_type: record.entity_type,
    business_type: record.business_type
  }));
};
