export const tableSelector = (data: any) => {
  if (!data) {
    return [];
  }

  return data.users.value.records
    .map((record) => ({
      id: record.id,
      firstName: record.first_name,
      lastName: record.last_name,
      email: record.email,
      active: record.active,
      createdAt: record.created_at,
      lastLogin: record.last_login,
      permissions: record.permissions,
      phone: record.phone
    }))
    .sort((a, b) => (a.firstName || '').localeCompare(b.firstName || ''));
};
