/**
 *  This enum formatted for
 *  backend status: el-tag type
 *
 *  AFTER ADDING A NEW STATUS HERE YOU MUST ADD IT TO
 *  @see js/lang/messages.js
 *  BY PATH
 *  orders.statuses
 **/
export const OrderStatusesEnum = {
    new: 'info',
    checkout: 'warning',
    paid: '',
    failed: 'danger',
    shipped: '',
    delivered: 'success',
    returned: 'danger',
    completed: 'success'
}
