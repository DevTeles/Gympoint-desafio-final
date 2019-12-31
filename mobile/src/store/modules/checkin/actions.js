export function checkinsClear() {
  return {
    type: '@checkin/CHECKIN_CLEAR',
  };
}

export function listCheckinRequest(payload) {
  return {
    type: '@checkin/LIST_CHECKIN_REQUEST',
    payload,
  };
}

export function listCheckinSucess({ checkins, pagination, shouldRefresh }) {
  return {
    type: '@checkin/LIST_CHECKIN_SUCCESS',
    payload: { checkins, pagination, shouldRefresh },
  };
}

export function checkinRequest(id) {
  return {
    type: '@checkin/CHECKIN_REQUEST',
    id,
  };
}

export function checkinSucess(checkin) {
  return {
    type: '@checkin/CHECKIN_SUCCESS',
    payload: { checkin },
  };
}

export function checkinFailure() {
  return {
    type: '@checkin/CHECKIN_FAILURE',
  };
}
