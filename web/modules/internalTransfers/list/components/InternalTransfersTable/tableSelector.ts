export const tableSelector = (data: any) => {
  if (!data) {
    return [];
  }

  return data.internalTransfers.value.records.map((record) => {
    const senderLicense = data.relatedLicenses.value.records.find((i) => i.id === record.sender_license_id);
    const recipientLicense = data.relatedLicenses.value.records.find((i) => i.id === record.recipient_license_id);

    const senderCompany = data.relatedCompanies.value.records.find((i) => i.id === senderLicense.company_id);
    const recipientCompany = data.relatedCompanies.value.records.find((i) => i.id === recipientLicense.company_id);

    return {
      id: record.id,
      senderName: senderLicense?.name || '---',
      amount: record.amount,
      status: record.status,
      created_at: record.created_at,
      sender: {
        company: senderCompany.name,
        license: senderLicense.name,
        licenseType: senderLicense.subtype
      },
      recipient: {
        company: recipientCompany.name,
        license: recipientLicense.name,
        licenseType: recipientLicense.subtype
      }
    };
  });
};
