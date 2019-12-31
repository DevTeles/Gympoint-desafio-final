import React, { useState, useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import * as Yup from 'yup';

import { formatPrice } from '~/utils/format';

const schema = Yup.object().shape({
  title: Yup.string().required('Campo obrigatório'),
  duration: Yup.number()
    .typeError('Insira um número de 1 a 12')
    .min(1, 'Nao pode ser menor que 1')
    .max(12, 'Deve ser menor ou igual a 12')
    .required('Campo obrigatório'),
  price: Yup.string().required('Campo obrigatório'),
});

export default function FormPack({ onSubmit, initialData }) {
  const [duration, setDuration] = useState(' ');
  const [price, setPrice] = useState(' ');
  const [totalPrice, setTotalPrice] = useState(0);

  useMemo(() => {
    const total = duration * price;
    const totalFormated = formatPrice(total);

    setTotalPrice(totalFormated);
  }, [duration, price]);

  return (
    <Form
      id="pack"
      initialData={initialData}
      schema={schema}
      onSubmit={onSubmit}
    >
      <div className="form-group">
        <label htmlFor="title">Título do plano</label>
        <Input name="title" />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="duration">
            Duração <small>(em meses)</small>
          </label>
          <Input
            name="duration"
            type="number"
            onChange={e => setDuration(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Preço mensal</label>
          <Input name="price" onChange={e => setPrice(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="totalPrice">Preço total</label>
          <Input name="totalPrice" disabled value={totalPrice} />
        </div>
      </div>
    </Form>
  );
}

FormPack.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.oneOfType([PropTypes.object]),
};

FormPack.defaultProps = {
  initialData: null,
};
