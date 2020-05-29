const statusLabelMap = {
  complete: 'Complete',
  completed: 'Completed',
  incomplete: 'Incomplete',
  approved: 'Approved',
  new: 'New'
};

export const getAnnualReviewStatusLabel = (name: string): string => statusLabelMap[name] || name;
