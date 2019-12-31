import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, FormInput, SubmitButton } from './styles';

import logo from '~/assets/logo.png';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispacth = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const [id, setId] = useState();

  function handleSubmit() {
    dispacth(signInRequest(id));
  }

  return (
    <Container>
      <Image source={logo} />

      <Form>
        <FormInput
          placeholder="Informe seu ID de cadastro"
          keyboardType="number-pad"
          returnKeyType="send"
          value={id}
          onChangeText={setId}
        />
        <SubmitButton
          loading={loading}
          onPress={handleSubmit}
          label="Entrar no sistema"
        />
      </Form>
    </Container>
  );
}
