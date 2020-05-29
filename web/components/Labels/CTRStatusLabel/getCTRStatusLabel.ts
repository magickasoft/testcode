const customerStatusMap = {
  new: 'New',
  approved: 'Approved',
  cancelled: 'Cancelled',
  submitted: 'Submitted',
  acknowledged_with_warnings: 'Acknowledged With Warnings',
  acknowledged: 'Acknowledged'
};

export const getCTRStatusLabel = (status: string) => customerStatusMap[status];
