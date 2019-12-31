import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { addSuccess, updateSuccess } from './actions';

export function* addEnroll({ payload }) {
  try {
    const { student_id, pack_id, start_date } = payload;

    const response = yield call(api.post, 'enrolls', {
      student_id,
      pack_id,
      start_date,
    });

    yield put(addSuccess(response.data));

    toast.success('Matrícula cadastrada com sucesso');
    history.push('/enrolls');
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export function* updateEnroll({ payload }) {
  try {
    const { id, student_id, pack_id, start_date } = payload;

    const response = yield call(api.put, `enrolls/${id}`, {
      student_id,
      pack_id,
      start_date,
    });

    yield put(updateSuccess(response.data));

    toast.success('Matrícula atualizada com sucesso');
    history.push('/enrolls');
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export function* removeEnroll({ payload }) {
  const { id } = payload;
  try {
    yield call(api.delete, `enrolls/${id}`);
    toast.success('Matrícula excluída com sucesso');
  } catch (error) {
    toast.error('Não foi possível excluir a matrícula');
  }
}

export default all([
  takeLatest('@enroll/ADD_REQUEST', addEnroll),
  takeLatest('@enroll/UPDATE_REQUEST', updateEnroll),
  takeLatest('@enroll/REMOVE_REQUEST', removeEnroll),
]);
