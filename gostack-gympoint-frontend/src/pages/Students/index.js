import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdSearch, MdPersonAdd } from 'react-icons/md';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import history from '~/services/history';
import { removeRequest } from '~/store/modules/student/actions';

import api from '~/services/api';

import ModalRemove from '~/components/Modal/remove';

import { Container } from './styles';

export default function Students() {
  const dispatch = useDispatch();

  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');
      setStudents(response.data);
    }

    loadStudents();
  }, []);

  function handleEdit(id) {
    history.push(`students/${id}`);
  }

  function openModal(studentToRemove) {
    setStudent(studentToRemove);
    setShowModal(true);
  }

  function hideModal() {
    setShowModal(false);
  }

  function handleRemove() {
    dispatch(removeRequest(student));

    const studentIndex = students.findIndex(i => i.id === student.id);
    const studentsUpdated = students.slice(0, studentIndex);
    if (studentIndex) {
      setStudents(studentsUpdated);
    }
    setShowModal(false);
  }

  async function handleSearch({ name }) {
    const response = await api.get(`students?name=${name}`);
    setStudents(response.data);
  }

  return (
    <Container>
      <div className="page-title">
        <h1>Gerenciando alunos</h1>
        <div className="actions">
          <Link to="/students/new" className="btn primary">
            <MdPersonAdd size={16} color="#fff" />
            Cadastrar
          </Link>
          <Form onSubmit={handleSearch}>
            <div className="input-icon left">
              <MdSearch size="18" color="#999" />
              <Input name="name" placeholder="Buscar aluno" />
            </div>
          </Form>
        </div>
      </div>

      <div className="content">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th align="center">Idade</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {students.length ? (
              students.map(s => (
                <tr key={s.id}>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td align="center">{s.age}</td>
                  <td className="actions">
                    <button
                      type="button"
                      className="link"
                      onClick={() => handleEdit(s.id)}
                    >
                      editar
                    </button>
                    <button
                      type="button"
                      className="link danger"
                      onClick={() => openModal(s)}
                    >
                      excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Nenhum resultado encontrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <ModalRemove
        showModal={showModal}
        handleClose={hideModal}
        handleRemove={handleRemove}
      />
    </Container>
  );
}
