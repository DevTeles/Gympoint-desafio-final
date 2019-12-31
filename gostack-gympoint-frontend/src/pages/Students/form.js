import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
  age: Yup.number()
    .typeError('Insira a idade')
    .required('Campo obrigatório'),
  weight: Yup.number()
    .typeError('Insira o peso em "kg"')
    .required('Campo obrigatório'),
  height: Yup.number()
    .typeError('Insira a altura em "cm"')
    .required('Campo obrigatório'),
});

export default function FormStudent({ initialData, onSubmit }) {
  return (
    <Form
      id="student"
      schema={schema}
      initialData={initialData}
      onSubmit={onSubmit}
    >
      <div className="form-group">
        <label htmlFor="name">Nome Completo</label>
        <Input name="name" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Endereço de e-mail</label>
        <Input name="email" type="email" />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="age">Idade</label>
          <Input name="age" type="number" />
        </div>

        <div className="form-group">
          <label htmlFor="weight">
            Peso <small>(em kg)</small>
          </label>
          <Input name="weight" type="number" />
        </div>

        <div className="form-group">
          <label htmlFor="height">
            Altura <small>(em cm)</small>
          </label>
          <Input name="height" type="number" />
        </div>
      </div>
    </Form>
  );
}

FormStudent.propTypes = {
  initialData: PropTypes.oneOfType([PropTypes.object]),
  onSubmit: PropTypes.func.isRequired,
};

FormStudent.defaultProps = {
  initialData: null,
};
