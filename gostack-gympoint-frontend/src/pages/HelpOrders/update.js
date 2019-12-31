import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdSave } from 'react-icons/md';
import FormHelp from './form';
import api from '~/services/api';
import { updateRequest } from '~/store/modules/helpOrders/actions';
import { Container } from './styles';

export default function UpdateHelp({ match }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.helpOrders.loading);
  const { id } = match.params;

  const [help, setHelp] = useState(null);

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get(`help-orders/${id}`);
      setHelp(response.data);
    }
    loadHelpOrders();
  }, [id]);

  function onSubmit({ answer }) {
    dispatch(updateRequest(id, answer));
  }

  return (
    <Container>
      <div className="page-title">
        <h1>Edição de pedido auxílio</h1>
        <div className="actions">
          <Link to="/help-orders" className="btn secondary">
            <MdArrowBack size={16} color="#fff" />
            Voltar
          </Link>
          <button form="help" type="submit" className="btn primary">
            <MdSave size={16} color="#fff" />
            {loading ? 'Carregando..' : 'Salvar'}
          </button>
        </div>
      </div>

      <div className="content">
        <FormHelp initialData={help} onSubmit={onSubmit} />
      </div>
    </Container>
  );
}
