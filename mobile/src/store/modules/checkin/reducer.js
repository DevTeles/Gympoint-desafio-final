import produce from 'immer';

const INITIAL_STATE = {
  checkins: [],
  pagination: {
    page: 1,
    perPage: 5,
    total: 0,
    totalPage: 0,
  },
  loading: false,
};

function formattedListCheckins(checkins) {
  let index = checkins.length;
  console.tron.log('abaixo::::');
  console.tron.warn(checkins);
  const checkinsFormatted = checkins.map(check => {
    const item = {
      ...check,
      label: `Check #${index}`,
    };
    index -= 1;
    return item;
  });

  return checkinsFormatted;
}

export default function checkin(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@checkin/LIST_CHECKIN_SUCCESS': {
        const { checkins, shouldRefresh, pagination } = action.payload;

        const newList = shouldRefresh
          ? checkins
          : [...state.checkins, ...checkins];

        const checkinsFormatted = formattedListCheckins(newList);

        draft.checkins = checkinsFormatted;

        draft.pagination = pagination;
        draft.loading = false;
        break;
      }
      case '@checkin/CHECKIN_SUCCESS': {
        const checkins = [...state.checkins, action.payload.checkin];

        const checkinsFormatted = formattedListCheckins(checkins);

        draft.checkins = checkinsFormatted;
        draft.loading = false;
        break;
      }
      case '@checkin/CHECKIN_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@checkin/CHECKIN_CLEAR': {
        draft.checkins = [];
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
