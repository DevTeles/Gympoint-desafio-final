import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import ModalHelpOrders from '~/components/Modal/helpOrders';

import { Container } from './styles';

export default function HelpOrders() {
  const [helpOrdes, setHelpOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [question, setQuestion] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    async function loadHelps() {
      const response = await api.get('/help-orders');
      setHelpOrders(response.data);
    }

    loadHelps();
  }, []);

  function openModal(id, question) {
    setShowModal(true);
    setQuestion(question);
    setId(id);
  }

  function hideModal() {
    setShowModal(false);
  }

  return (
    <Container>
      <div className="page-title">
        <h1>Pedidos de auxílio</h1>
      </div>

      <div className="content">
        <table>
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Pergunta</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {helpOrdes ? (
              helpOrdes.map(h => (
                <tr key={h.id}>
                  <td>{h.student.name}</td>
                  <td>{h.question}</td>
                  <td className="actions">
                    <button
                      type="button"
                      className="link"
                      onClick={() => openModal(h.id, h.question)}
                    >
                      responder
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>Nenhum pedido de auxílio encontrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <ModalHelpOrders
        handleClose={hideModal}
        showModal={showModal}
        question={question}
        idAnswer={id}
      />
    </Container>
  );
}
