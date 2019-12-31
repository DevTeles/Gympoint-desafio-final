import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { removeRequest } from '~/store/modules/enroll/actions';

import ModalRemove from '~/components/Modal/remove';

import history from '~/services/history';
import api from '~/services/api';

import { Container } from './styles';

export default function Enrolls() {
  const dispatch = useDispatch();

  const [enrolls, setEnrolls] = useState([]);
  const [enroll, setEnroll] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function loadEnrolls() {
      const response = await api.get('enrolls');

      const data = response.data.map(e => ({
        ...e,
        active: e.active === true ? 'sim' : 'não',
        startDate: format(parseISO(e.start_date), "dd 'de' MMMM 'de' yyyy", {
          locale: pt,
        }),
        endDate: format(parseISO(e.end_date), "dd 'de' MMMM 'de' yyyy", {
          locale: pt,
        }),
      }));

      setEnrolls(data);
    }

    loadEnrolls();
  }, []);

  function handleEdit(id) {
    history.push(`enrolls/${id}`);
  }

  function openModal(enrollToRemove) {
    setEnroll(enrollToRemove);
    setShowModal(true);
  }

  function hideModal() {
    setShowModal(false);
  }

  function handleRemove() {
    dispatch(removeRequest(enroll));

    const enrollIndex = enrolls.findIndex(i => i.id === enroll.id);
    const enrollsUpdated = enrolls.slice(0, enrollIndex);
    if (enrollIndex) {
      setEnrolls(enrollsUpdated);
    }
    setShowModal(false);
  }

  return (
    <Container>
      <div className="page-title">
        <h1>Gerenciando matrículas</h1>
        <div className="actions">
          <Link to="/enrolls/new" className="btn primary">
            <MdAdd size={16} color="#fff" />
            Cadastrar
          </Link>
        </div>
      </div>

      <div className="content">
        <table>
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Plano</th>
              <th>Início</th>
              <th>Término</th>
              <th align="center">Ativo</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {enrolls.map(e => (
              <tr key={e.id}>
                <td>{e.student ? e.student.name : 'Aluno que foi excluído'}</td>
                <td>{e.pack.title}</td>
                <td>{e.startDate}</td>
                <td>{e.endDate}</td>
                <td align="center">{e.active}</td>
                <td className="actions">
                  <button
                    type="button"
                    className="link"
                    onClick={() => handleEdit(e.id)}
                  >
                    editar
                  </button>
                  <button
                    type="button"
                    className="link danger"
                    onClick={() => openModal(e.id)}
                  >
                    excluir
                  </button>
                </td>
              </tr>
            ))}
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
