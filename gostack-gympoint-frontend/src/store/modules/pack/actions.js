export function addRequest(title, duration, price) {
  return {
    type: '@pack/ADD_REQUEST',
    payload: { title, duration, price },
  };
}

export function addSuccess(pack) {
  return {
    type: '@pack/ADD_SUCCESS',
    payload: { pack },
  };
}

export function updateRequest(id, title, duration, price) {
  return {
    type: '@pack/UPDATE_REQUEST',
    payload: { id, title, duration, price },
  };
}

export function updateSuccess(pack) {
  return {
    type: '@pack/UPDATE_SUCCESS',
    payload: { pack },
  };
}

export function removeRequest(pack) {
  return {
    type: '@pack/REMOVE_REQUEST',
    payload: { pack },
  };
}

export function failure() {
  return {
    type: '@pack/FAILURE',
  };
}
