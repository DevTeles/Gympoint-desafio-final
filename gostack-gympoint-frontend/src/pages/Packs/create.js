import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdSave } from 'react-icons/md';
import FormPack from './form';

import { addRequest } from '~/store/modules/pack/actions';

import { Container } from './styles';

export default function CreatePack() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.pack.loading);

  function onSubmit({ title, duration, price }) {
    dispatch(addRequest(title, duration, price));
  }

  return (
    <Container>
      <div className="page-title">
        <h1>Cadastro pacote</h1>
        <div className="actions">
          <Link to="/packs" className="btn secondary">
            <MdArrowBack size={16} color="#fff" />
            Voltar
          </Link>
          <button form="pack" type="submit" className="btn primary">
            <MdSave size={16} color="#fff" />
            {loading ? 'Carregando..' : 'Salvar'}
          </button>
        </div>
      </div>
      <div className="content">
        <FormPack onSubmit={onSubmit} />
      </div>
    </Container>
  );
}
