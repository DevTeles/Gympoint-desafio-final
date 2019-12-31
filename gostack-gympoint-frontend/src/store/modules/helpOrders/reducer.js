import { produce } from 'immer';

const INITIAL_STATE = {
  helpOrders: {},
  loading: false,
};

export default function helpOrders(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@helpOrders/ADD_REQUEST': {
        draft.helpOrders = action.payload;
        draft.loading = true;
        break;
      }

      case '@helpOrders/ADD_SUCCESS': {
        draft.loading = false;
        break;
      }

      case '@helpOrders/UPDATE_REQUEST': {
        draft.helpOrders = action.payload;
        draft.loading = true;
        break;
      }

      case '@helpOrders/UPDATE_SUCCESS': {
        draft.loading = false;
        break;
      }

      case '@helpOrders/REMOVE_REQUEST': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
