import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/services/api';
import { signInSucess, signFailure } from './actions';

export function* singIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.post, 'sessionsStudent', {
      id,
    });

    const { token, student } = response.data;

    if (student === null) {
      yield put(signFailure());
      Alert.alert('Falha na autenticação', 'Aluno não encontrado');
      return;
    }

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    yield put(signInSucess(token, student));
  } catch (error) {
    Alert.alert('Falha na autenticação', 'Aluno não encontrado');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function singOut() {}

export default all([
  takeLatest('@persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', singIn),
  takeLatest('@auth/SIGN_OUT', singOut),
]);
