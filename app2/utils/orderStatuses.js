export const ORDER_RECEIVED_STATUS = 'order_received';
export const LOCATING_STATUS = 'locating';
export const PROCESSING_STATUS = 'processing';
export const DRAG_DISABLED_STATUSES = ['creating', PROCESSING_STATUS, LOCATING_STATUS];
export const PREORDER_STATUSES = ['creating', PROCESSING_STATUS, 'connected', ORDER_RECEIVED_STATUS, LOCATING_STATUS];
export const POINTER_DISPLAY_STATUSES = ['creating', PROCESSING_STATUS, 'connected', LOCATING_STATUS];
export const CANCEL_ALLOWED_STATUSES = [ORDER_RECEIVED_STATUS, LOCATING_STATUS];
export const ARRIVED_STATUS = 'arrived';
export const ACTIVE_STATUS = 'in_progress';
export const DRIVER_ON_WAY = 'on_the_way';
export const ACTIVE_DRIVER_STATUSES = [DRIVER_ON_WAY, ARRIVED_STATUS];
export const COMPLETED_STATUS = 'completed';
export const CANCELLED_STATUS = 'cancelled';
export const REJECTED_STATUS = 'rejected';
export const BILLED_STATUS = 'billed';
export const IN_PROGRESS_STATUS = 'in_progress';
export const CUSTOMER_CARE_STATUS = 'customer_care';
export const COMPLETED_STATUSES = [
  COMPLETED_STATUS,
  BILLED_STATUS
];
export const FINAL_STATUSES = [
  ...COMPLETED_STATUSES,
  CANCELLED_STATUS,
  REJECTED_STATUS,
  CUSTOMER_CARE_STATUS
];
