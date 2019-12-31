import produce from 'immer';

const INITIAL_STATE = {
  helpOrders: [],
  pagination: {
    page: 1,
    perPage: 5,
    total: 0,
    totalPage: 0,
  },
  loading: false,
};

export default function helpOrder(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@helpOrder/LIST_HELP_ORDER_SUCCESS': {
        const { helpOrders, shouldRefresh, pagination } = action.payload;

        draft.helpOrders = shouldRefresh
          ? helpOrders
          : [...state.helpOrders, ...helpOrders];
        draft.pagination = pagination;
        draft.loading = false;
        break;
      }
      case '@helpOrder/STORE_HELP_ORDER_SUCCESS': {
        draft.helpOrders = [action.payload.helpOrder, ...state.helpOrders];
        draft.loading = false;
        break;
      }

      case '@helpOrder/UPDATE_HELP_ORDER_ANSWERED': {
        const { helpOrderAnswered } = action;
        const newList = state.helpOrders.map(help =>
          help.id === helpOrderAnswered.id
            ? { ...help, ...helpOrderAnswered }
            : help
        );

        draft.helpOrders = newList;

        break;
      }

      case '@helpOrder/HELP_ORDER_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@helpOrder/HELP_ORDER_CLEAR': {
        draft.helpOrders = [];
        draft.pagination = {
          page: 1,
          perPage: 5,
          total: 0,
          totalPage: 0,
        };
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
