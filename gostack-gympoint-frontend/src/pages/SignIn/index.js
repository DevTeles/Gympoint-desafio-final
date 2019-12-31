import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Informe seu e-mail'),
  password: Yup.string().required('Informe sua senha'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <img src={logo} alt="GymPoint" />
      <div className="form-group">
        <label htmlFor="email">Seu E-mail</label>
        <Input name="email" type="email" placeholder="Email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Sua Senha</label>
        <Input name="password" type="password" placeholder="Password" />
      </div>
      <button type="submit" className="btn primary" disabled={loading}>
        {loading ? 'Carregando...' : 'Entrar no sistema'}
      </button>
    </Form>
  );
}
