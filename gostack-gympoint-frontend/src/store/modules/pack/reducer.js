import { produce } from 'immer';

const INITIAL_STATE = {
  pack: [],
  loading: false,
};

export default function pack(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@pack/ADD_REQUEST': {
        draft.pack = action.payload.data;
        draft.loading = true;
        break;
      }

      case '@pack/ADD_SUCCESS': {
        draft.loading = false;
        break;
      }

      case '@pack/REMOVE_REQUEST': {
        draft.loading = false;
        break;
      }

      case '@pack/FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
