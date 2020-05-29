export const tableSelector = (data: any) => {
  if (!data) {
    return [];
  }

  return data.internalTransfersExport.value.records.map((record) => ({
    id: record.id,
    status: record.status,
    createdAt: record.created_at,
    processedAt: record.processing_date,
    creditFileS3Key: record.credit_file_s3_key,
    debitFileS3Key: record.debit_file_s3_key
  }));
};
