export function listHelpOrderRequest(payload) {
  return {
    type: '@helpOrder/LIST_HELP_ORDER_REQUEST',
    payload,
  };
}

export function listHelpOrderSucess({ helpOrders, pagination, shouldRefresh }) {
  return {
    type: '@helpOrder/LIST_HELP_ORDER_SUCCESS',
    payload: { helpOrders, pagination, shouldRefresh },
  };
}

export function storeHelpOrderRequest(payload) {
  return {
    type: '@helpOrder/STORE_HELP_ORDER_REQUEST',
    payload,
  };
}

export function storeHelpOrderSucess(helpOrder) {
  return {
    type: '@helpOrder/STORE_HELP_ORDER_SUCCESS',
    payload: { helpOrder },
  };
}

export function updateHelpOrderAnswered(helpOrderAnswered) {
  return {
    type: '@helpOrder/UPDATE_HELP_ORDER_ANSWERED',
    helpOrderAnswered,
  };
}

export function helpOrderAnswerNotification(helpOrderAnswered) {
  return {
    type: '@helpOrder/ANSWER_NOTIFICATION',
    helpOrderAnswered,
  };
}

export function helpOrderClear() {
  return {
    type: '@helpOrder/HELP_ORDER_CLEAR',
  };
}

export function helpOrderFailure() {
  return {
    type: '@helpOrder/HELP_ORDER_FAILURE',
  };
}
