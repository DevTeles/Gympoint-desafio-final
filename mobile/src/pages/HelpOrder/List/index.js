import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Layout from '~/pages/Layout/index';

import {
  Container,
  OrderList,
  HelpOrderButton,
  Order,
  OrderInfo,
  StatusInfo,
  Status,
  Time,
  Question,
} from './styles';
import {
  listHelpOrderRequest,
  helpOrderClear,
} from '~/store/modules/helpOrder/actions';
import Loading from '~/components/Loading';

export default function List({ navigation }) {
  const student = useSelector(state => state.auth.student);
  const helpOrders = useSelector(state => state.helpOrder.helpOrders);
  const pagination = useSelector(state => state.helpOrder.pagination);
  const [page, setpPage] = useState(1);
  const loading = useSelector(state => state.helpOrder.loading);
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);

  async function loadHelpOrders(pageNumber = page, shouldRefresh = false) {
    if (!shouldRefresh && pagination.totalPage && page > pagination.totalPage)
      return;

    dispatch(
      listHelpOrderRequest({
        page: pageNumber,
        student_id: student.id,
        shouldRefresh,
      })
    );

    setpPage(pageNumber + 1);
  }

  async function reload() {
    setRefreshing(true);
    await loadHelpOrders(1, true);
    setRefreshing(false);
  }

  // useEffect(() => {
  //   loadHelpOrders();
  // }, [loadHelpOrders]);

  useEffect(() => {
    return () => {
      dispatch(helpOrderClear());
    };
  }, [dispatch]);

  return (
    <Layout>
      <Container>
        <HelpOrderButton
          onPress={() => navigation.navigate('New', { student })}
          label="Novo pedido de auxílio"
        />

        <OrderList
          data={helpOrders}
          keyExtractor={item => String(item.id)}
          onRefresh={reload}
          refreshing={refreshing}
          // onEndReached={() => loadHelpOrders()}
          // onEndReachedThreshold={0.2}
          ListFooterComponent={loading && <Loading />}
          renderItem={({ item }) => (
            <Order
              onPress={() => navigation.navigate('Detail', { helpOrder: item })}
            >
              <OrderInfo>
                <StatusInfo>
                  <Icon
                    name="check-circle"
                    color={item.answer_at ? '#42CB59' : '#999999'}
                    size={19}
                  />
                  <Status answered={item.answer_at}>
                    {item.answer_at ? 'Respondida' : 'Sem Resposta'}
                  </Status>
                </StatusInfo>
                <Time>
                  {item.answer_at
                    ? item.dateFormattedAnswerAt
                    : item.dateFormattedCreatedAt}
                </Time>
              </OrderInfo>
              <Question>{item.question}</Question>
            </Order>
          )}
        />
      </Container>
    </Layout>
  );
}

List.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};
