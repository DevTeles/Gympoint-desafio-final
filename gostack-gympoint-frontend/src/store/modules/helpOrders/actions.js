export function addRequest(answer) {
  return {
    type: '@helpOrders/ADD_REQUEST',
    payload: { answer },
  };
}

export function addSuccess(helpOrders) {
  return {
    type: '@helpOrders/ADD_SUCCESS',
    payload: { helpOrders },
  };
}

export function updateRequest(id, answer, answer_at) {
  return {
    type: '@helpOrders/UPDATE_REQUEST',
    payload: { id, answer, answer_at },
  };
}

export function updateSuccess(helpOrders) {
  return {
    type: '@helpOrders/UPDATE_SUCCESS',
    payload: { helpOrders },
  };
}

export function updateFailure() {
  return {
    type: '@helpOrders/UPDATE_REQUEST',
  };
}

export function removeRequest(id) {
  return {
    type: '@enroll/REMOVE_REQUEST',
    payload: { id },
  };
}
