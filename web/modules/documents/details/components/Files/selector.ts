export const selector = (data: any) => {
  if (!data) {
    return [];
  }

  return data.files.value.records.map((i) => ({
    id: i.id,
    name: i.name,
    status: i.status,
    notes: i.notes,
    uploadedAt: i.created_at
  }));
};
