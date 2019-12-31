import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { addSuccess, updateSuccess, updateFailure } from './actions';

export function* addHelpOrders({ payload }) {
  try {
    const { answer } = payload;

    const response = yield call(api.post, 'help-orders', {
      answer,
    });

    yield put(addSuccess(response.data));

    toast.success('Pedido de auxílio atualizado com sucesso');
    history.push('/help-orders');
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export function* updateHelpOrders({ payload }) {
  try {
    const { id, answer } = payload;

    const response = yield call(api.put, `help-orders/${id}`, {
      answer,
    });

    toast.success('Pedido auxílio respondido com sucesso!');
    history.push('/help-orders');
  } catch (err) {
    yield put(updateFailure());
    toast.error(err.response.data.error);
  }
}

export function* removeHelpOrders({ payload }) {
  const { id } = payload;
  try {
    yield call(api.delete, `help-orders/${id}`);
    toast.success('Pedido auxílio excluído com sucesso!');
  } catch (error) {
    toast.error('Não foi possível excluir o pedido auxílio!');
  }
}

export default all([
  takeLatest('@helpOrders/ADD_REQUEST', addHelpOrders),
  takeLatest('@helpOrders/UPDATE_REQUEST', updateHelpOrders),
  takeLatest('@helpOrders/REMOVE_REQUEST', removeHelpOrders),
]);
