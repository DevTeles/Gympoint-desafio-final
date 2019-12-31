import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { addSuccess, updateSuccess, failure } from './actions';

export function* addPack({ payload }) {
  try {
    const { title, duration, price } = payload;

    const response = yield call(api.post, 'packs', {
      title,
      duration,
      price,
    });

    yield put(addSuccess(response.data));

    toast.success('Pacote cadastrado com sucesso');
    history.push('/packs');
  } catch (error) {
    yield put(failure());
    toast.error(error.response.data.error);
  }
}

export function* updatePack({ payload }) {
  try {
    const { id, title, duration, price } = payload;

    const response = yield call(api.put, `packs/${id}`, {
      title,
      duration,
      price,
    });

    yield put(updateSuccess(response.data));

    toast.success('Pacote atualizado com sucesso');
    history.push('/packs');
  } catch (error) {
    yield put(failure());
    toast.error(error.response.data.error);
  }
}

export function* removePack({ payload }) {
  const { id } = payload.pack;
  try {
    yield call(api.delete, `packs/${id}`);
    toast.success('Pacote removido com sucesso');
  } catch (error) {
    yield put(failure());
    toast.error('Não foi possível remover o pacote');
  }
}

export default all([
  takeLatest('@pack/ADD_REQUEST', addPack),
  takeLatest('@pack/UPDATE_REQUEST', updatePack),
  takeLatest('@pack/REMOVE_REQUEST', removePack),
]);
