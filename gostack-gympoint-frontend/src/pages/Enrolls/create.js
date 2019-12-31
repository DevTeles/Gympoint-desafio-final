import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdSave } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import FormEnroll from './form';

import { addRequest } from '~/store/modules/enroll/actions';

import { Container } from './styles';

export default function CreateEnrolls() {
  const dispatch = useDispatch();

  function handleSubmit({ student_id, pack_id, start_date }) {
    dispatch(addRequest(student_id, pack_id, start_date));
  }

  return (
    <Container>
      <div className="page-title">
        <h1>Cadastro de matrículas</h1>
        <div className="actions">
          <Link to="/enrolls" className="btn secondary">
            <MdArrowBack size={16} color="#fff" />
            Voltar
          </Link>
          <button form="enroll" type="submit" className="btn primary">
            <MdSave size={16} color="#fff" />
            Salvar
          </button>
        </div>
      </div>
      <div className="content">
        <FormEnroll onSubmit={handleSubmit} />
      </div>
    </Container>
  );
}
