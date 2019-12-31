import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Title,
  Avatar,
  Info,
  Name,
  Email,
  SingOutButton,
} from './styles';
import Layout from '../Layout';
import { signOut } from '../../store/modules/auth/actions';

export default function Profile() {
  const student = useSelector(state => state.auth.student);

  const dispach = useDispatch();

  function handleSingOut() {
    dispach(signOut());
  }

  return (
    <Layout>
      <Container>
        <Title>Meu Perfil</Title>
        <Avatar
          source={{
            uri:
              student && student.avatar
                ? student.avatar.url.replace('localhost', '10.0.3.2')
                : 'https://api.adorable.io/avatars/120/abott@adorable.png',
          }}
        />

        <Info>
          <Name>{student ? student.name : ''}</Name>
          <Email>{student ? student.email : ''}</Email>
        </Info>

        <SingOutButton onPress={handleSingOut} label="Sair" />
      </Container>
    </Layout>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-box" size={20} color={tintColor} />
  ),
};
