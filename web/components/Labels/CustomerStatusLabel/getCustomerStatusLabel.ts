/**
 customer_status = 'qualified_lead' OR
 customer_status = 'applicant' OR
 customer_status = 'pending_customer' OR
 customer_status = 'customer' OR
 customer_status = 'denied_customer' OR
 customer_status = 'former_customer'
 */

const customerStatusMap = {
  qualified_lead: 'Qualified Lead',
  applicant: 'Applicant',
  pending_customer: 'Pending Customer',
  customer: 'Customer',
  denied_customer: 'Denied Customer',
  former_customer: 'Former Customer'
};

export const getCustomerStatusLabel = (status: string) => customerStatusMap[status];
