import { produce } from 'immer';

const INITIAL_STATE = {
  enroll: {},
  loading: false,
};

export default function enroll(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@enroll/ADD_REQUEST': {
        draft.enroll = action.payload;
        draft.loading = true;
        break;
      }

      case '@enroll/ADD_SUCCESS': {
        draft.loading = false;
        break;
      }

      case '@enroll/UPDATE_REQUEST': {
        draft.enroll = action.payload;
        draft.loading = true;
        break;
      }

      case '@enroll/UPDATE_SUCCESS': {
        draft.loading = false;
        break;
      }

      case '@enroll/REMOVE_REQUEST': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
