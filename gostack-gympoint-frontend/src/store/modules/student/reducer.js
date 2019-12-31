import { produce } from 'immer';

const INITIAL_STATE = {
  students: [],
  student: null,
  loading: false,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/ADD_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@student/ADD_SUCCESS': {
        draft.student = action.payload.student;
        draft.loading = false;
        break;
      }

      case '@student/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@student/UPDATE_SUCCESS': {
        draft.student = action.payload.student;
        draft.loading = false;
        break;
      }

      case '@student/FAILURE': {
        draft.loading = false;
        break;
      }

      // case '@student/REMOVE_SUCCESS': {
      //   draft.students = action.payload.students;
      //   break;
      // }

      default:
    }
  });
}
