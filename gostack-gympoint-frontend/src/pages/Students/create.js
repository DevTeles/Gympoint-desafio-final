import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdSave, MdArrowBack } from 'react-icons/md';

import { addRequest } from '~/store/modules/student/actions';

import FormStudent from './form';

import { Container } from './styles';

export default function CreateStudent() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.student.loading);

  function handleSubmit(data) {
    dispatch(addRequest(data));
  }

  return (
    <Container>
      <div className="page-title">
        <h1>Cadastro de Aluno</h1>
        <div className="actions">
          <Link to="/students" className="btn secondary">
            <MdArrowBack size={16} color="#fff" />
            Voltar
          </Link>
          <button form="student" type="submit" className="btn primary">
            <MdSave size={16} color="#fff" />
            {loading ? 'Carregando..' : 'Salvar'}
          </button>
        </div>
      </div>
      <div className="content">
        <FormStudent onSubmit={handleSubmit} />
      </div>
    </Container>
  );
}
