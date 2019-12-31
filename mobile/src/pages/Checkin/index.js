import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Layout from '../Layout/index';

import {
  Container,
  CheckinButton,
  CheckinList,
  CheckinInfo,
  Label,
  Time,
} from './styles';
import Loading from '~/components/Loading';
import {
  listCheckinRequest,
  checkinRequest,
  checkinsClear,
} from '../../store/modules/checkin/actions';

export default function Checkin() {
  const dispatch = useDispatch();
  const student = useSelector(state => state.auth.student);
  const checkins = useSelector(state => state.checkin.checkins);
  const pagination = useSelector(state => state.checkin.pagination);
  const [page, setpPage] = useState(1);
  const loading = useSelector(state => state.checkin.loading);
  const [refreshing, setRefreshing] = useState(false);

  async function loadCheckins(pageNumber = page, shouldRefresh = false) {
    if (!shouldRefresh && pagination.totalPage && page > pagination.totalPage)
      return;

    dispatch(
      listCheckinRequest({
        page: pageNumber,
        student_id: student.id,
        shouldRefresh,
      })
    );

    setpPage(pageNumber + 1);
  }

  function handleNewCheckin() {
    dispatch(checkinRequest(student.id));
  }

  async function reload() {
    setRefreshing(true);
    await loadCheckins(1, true);
    setRefreshing(false);
  }

  useEffect(() => {
    return () => {
      dispatch(checkinsClear());
    };
  }, [dispatch]);

  return (
    <Layout>
      <Container>
        <CheckinButton onPress={handleNewCheckin} label="Novo check-in" />

        <CheckinList
          data={checkins}
          keyExtractor={(item, index) => index.toString()}
          onRefresh={reload}
          refreshing={refreshing}
          // onEndReached={() => loadCheckins()}
          // onEndReachedThreshold={0.2}
          ListFooterComponent={loading && <Loading />}
          renderItem={({ item }) => (
            <CheckinInfo>
              <Label>{item.label}</Label>
              <Time>{item.dateFormatted}</Time>
            </CheckinInfo>
          )}
        />
      </Container>
    </Layout>
  );
}

Checkin.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};
