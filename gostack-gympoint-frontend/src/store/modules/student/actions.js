export function addRequest(data) {
  return {
    type: '@student/ADD_REQUEST',
    payload: { data },
  };
}

export function addSuccess(student) {
  return {
    type: '@student/ADD_SUCCESS',
    payload: { student },
  };
}

export function updateRequest(id, data) {
  return {
    type: '@student/UPDATE_REQUEST',
    payload: { id, data },
  };
}

export function updateSuccess(student) {
  return {
    type: '@student/UPDATE_SUCCESS',
    payload: { student },
  };
}

export function removeRequest(data) {
  return {
    type: '@student/REMOVE_REQUEST',
    payload: { data },
  };
}

export function failure() {
  return {
    type: '@student/FAILURE',
  };
}

// export function removeSuccess(students) {
//   return {
//     type: '@student/REMOVE_SUCCESS',
//     payload: { students },
//   };
// }
