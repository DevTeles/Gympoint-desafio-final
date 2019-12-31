import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { addSuccess, updateSuccess, failure } from './actions';
import history from '~/services/history';

export function* add({ payload }) {
  try {
    const { name, email, age, weight, height } = payload.data;
    const response = yield call(api.post, 'students', {
      name,
      email,
      age,
      weight,
      height,
    });

    yield put(addSuccess(response.data));
    toast.success('Estudante cadastrado com sucesso');
    history.push('/students');
  } catch (error) {
    yield put(failure());
    toast.error(error.response.data.error);
  }
}

export function* remove({ payload }) {
  try {
    const { id, name } = payload.data;

    yield call(api.delete, `students/${id}`);
    yield toast.success(`Estudante "${name}" excluído com sucesso`);
  } catch (err) {
    yield put(failure());
    toast.error('Não foi possível deletar o estudante');
  }
}

export function* update({ payload }) {
  try {
    const { id } = payload;
    const { name, email, age, weight, height } = payload.data;
    const response = yield call(api.put, `students/${id}`, {
      name,
      email,
      age,
      weight,
      height,
    });

    yield put(updateSuccess(response.data));
    yield toast.success(`Cadastro atualizado com sucesso`);
    history.push('/students');
  } catch (err) {
    yield put(failure());
    toast.error('Não foi possível atualizar o cadastro');
  }
}

export default all([
  takeLatest('@student/ADD_REQUEST', add),
  takeLatest('@student/UPDATE_REQUEST', update),
  takeLatest('@student/REMOVE_REQUEST', remove),
]);
