import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdSave } from 'react-icons/md';
import FormPack from './form';

import api from '~/services/api';

import { updateRequest } from '~/store/modules/pack/actions';

import { Container } from './styles';

export default function UpdatePack({ match }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.pack.loading);
  const { id } = match.params;

  const [pack, setPack] = useState(null);

  useEffect(() => {
    async function loadPack() {
      const response = await api.get(`packs/${id}`);
      setPack(response.data);
    }
    loadPack();
  }, [id]);

  function onSubmit({ title, duration, price }) {
    dispatch(updateRequest(id, title, duration, price));
  }

  return (
    <Container>
      <div className="page-title">
        <h1>Edição de Plano</h1>
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
        <FormPack initialData={pack} onSubmit={onSubmit} />
      </div>
    </Container>
  );
}
