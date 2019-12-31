export function addRequest(student_id, pack_id, start_date) {
  return {
    type: '@enroll/ADD_REQUEST',
    payload: { student_id, pack_id, start_date },
  };
}

export function addSuccess(enroll) {
  return {
    type: '@enroll/ADD_SUCCESS',
    payload: { enroll },
  };
}

export function updateRequest(id, student_id, pack_id, start_date) {
  return {
    type: '@enroll/UPDATE_REQUEST',
    payload: { id, student_id, pack_id, start_date },
  };
}

export function updateSuccess(enroll) {
  return {
    type: '@enroll/UPDATE_SUCCESS',
    payload: { enroll },
  };
}

export function removeRequest(id) {
  return {
    type: '@enroll/REMOVE_REQUEST',
    payload: { id },
  };
}
