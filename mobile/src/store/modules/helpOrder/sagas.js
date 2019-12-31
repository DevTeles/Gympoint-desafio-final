import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { parseISO, formatRelative, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import {
  listHelpOrderSucess,
  helpOrderFailure,
  updateHelpOrderAnswered,
  storeHelpOrderSucess,
} from './actions';

function* listHelpOrders({ payload }) {
  try {
    const { shouldRefresh } = payload;

    const res = yield call(
      api.get,
      `/students/${payload.student_id}/help-orders`,
      {
        params: {
          page: payload.page,
        },
      }
    );

    const helpOrders = res.data.map(helpOrder => ({
      ...helpOrder,
      dateFormattedCreatedAt: format(
        parseISO(helpOrder.createdAt),
        "d 'de' MMMM",
        {
          locale: pt,
        }
      ),

      dateFormattedAnswerAt: helpOrder.answer_at
        ? format(parseISO(helpOrder.answer_at), "d 'de' MMMM", { locale: pt })
        : null,
    }));

    const pagination = res.data;

    yield put(listHelpOrderSucess({ helpOrders, pagination, shouldRefresh }));
  } catch (error) {
    Alert.alert('Error', 'Erro ao listar os pedidos de ajuda');
    yield put(helpOrderFailure());
  }
}

function* storeHelpOrder({ payload }) {
  try {
    const { student_id, question } = payload;
    const res = yield call(api.post, `/students/${student_id}/help-orders`, {
      question,
    });

    const helpOrder = res.data;

    helpOrder.dateFormattedCreatedAt = format(
      parseISO(helpOrder.createdAt),
      "d 'de' MMMM",
      {
        locale: pt,
      }
    );

    helpOrder.dateFormattedAnswerAt = helpOrder.answer_at
      ? formatRelative(parseISO(helpOrder.answer_at), new Date(), {
          locale: pt,
        })
      : null;

    Alert.alert('Sucesso', 'Pedido de auxílio enviado');

    yield put(storeHelpOrderSucess(helpOrder));
  } catch (error) {
    Alert.alert('Error', 'Erro ao enviar o pedido de ajuda');
    yield put(helpOrderFailure());
  }
}

function* answerNotification({ helpOrderAnswered }) {
  helpOrderAnswered.dateFormattedCreatedAt = formatRelative(
    parseISO(helpOrderAnswered.createdAt),
    new Date(),
    {
      locale: pt,
    }
  );

  helpOrderAnswered.dateFormattedAnswerAt = helpOrderAnswered.answer_at
    ? formatRelative(parseISO(helpOrderAnswered.answer_at), new Date(), {
        locale: pt,
      })
    : null;

  yield put(updateHelpOrderAnswered(helpOrderAnswered));
}

export default all([
  takeLatest('@helpOrder/LIST_HELP_ORDER_REQUEST', listHelpOrders),
  takeLatest('@helpOrder/STORE_HELP_ORDER_REQUEST', storeHelpOrder),
  takeLatest('@helpOrder/ANSWER_NOTIFICATION', answerNotification),
]);
