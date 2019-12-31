import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { updateRequest } from '~/store/modules/helpOrders/actions';

import { ModalContainer } from './styles';

export default function ModalHelpOrders({
  showModal,
  handleClose,
  question,
  idAnswer,
}) {
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState(' ');

  function handleAtualize() {
    dispatch(updateRequest(idAnswer, answer, new Date()));
  }

  return (
    <ModalContainer size={550} showModal={showModal}>
      <div className="modal-dialog">
        <Form>
          <div className="modal-header">
            <h3>PERGUNTA DO ALUNO</h3>
            <button type="button" onClick={handleClose}>
              <MdClose size="18" color="#666" />
            </button>
          </div>
          <div className="modal-body">
            <p>{question}</p>
            <br />
            <div className="form-group mb-0">
              <label htmlFor="answer">Sua resposta</label>
              <Input
                multiline
                name="answer"
                onChange={e => setAnswer(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn primary w-100 ml-0"
              onClick={() => handleAtualize()}
            >
              Responder aluno
            </button>
          </div>
        </Form>
      </div>
    </ModalContainer>
  );
}

ModalHelpOrders.propTypes = {
  showModal: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  idAnswer: PropTypes.string.isRequired,
};

ModalHelpOrders.defaultProps = {
  showModal: false,
};
