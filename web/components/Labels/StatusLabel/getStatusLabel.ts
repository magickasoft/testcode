const statusMap = {
  incomplete: 'Incomplete',
  complete: 'Complete',
  pending_review: 'Pending Review',
  reviewed: 'Reviewed',
  new: 'New',
  completed: 'Completed',
  approved: 'Approved',
  processed: 'Processed',
  cancelled: 'Cancelled',
  pending_approval: 'Rending Approval'
};

export const getStatusLabel = (status: string): string | null => (status ? statusMap[status] : status);
