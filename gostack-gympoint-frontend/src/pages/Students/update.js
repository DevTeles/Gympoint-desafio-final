import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdSave, MdArrowBack } from 'react-icons/md';

import PropTypes from 'prop-types';
import { updateRequest } from '~/store/modules/student/actions';

import api from '~/services/api';
import FormStudent from './form';

import { Container } from './styles';

export default function UpdateStudent({ match }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.student.loading);

  const [student, setStudent] = useState({});

  const { id } = match.params;

  useEffect(() => {
    async function getStudents() {
      const response = await api.get(`students/${id}`);
      setStudent(response.data);
    }
    getStudents();
  }, [id]);

  function handleSubmit(data) {
    dispatch(updateRequest(id, data));
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
        <FormStudent initialData={student} onSubmit={handleSubmit} />
      </div>
    </Container>
  );
}

UpdateStudent.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
