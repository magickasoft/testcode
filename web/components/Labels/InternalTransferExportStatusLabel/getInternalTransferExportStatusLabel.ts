const internalTransferExportStatuses = {
  new: 'New',
  processed: 'Processed'
};

export const getInternalTransferExportStatusLabel = (name) => internalTransferExportStatuses[name] || name;
