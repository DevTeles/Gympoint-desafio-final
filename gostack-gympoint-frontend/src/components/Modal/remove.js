import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

import { ModalContainer } from './styles';

export default function ModalRemove({ handleRemove, handleClose, showModal }) {
  return (
    <ModalContainer size={350} showModal={showModal}>
      <div className="modal-dialog">
        <div className="modal-header">
          <h3>Excluir</h3>
          <button type="button" onClick={handleClose}>
            <MdClose size="18" color="#666" />
          </button>
        </div>
        <div className="modal-body">
          <p>Deseja confirmar a exclusão deste item?</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn secondary" onClick={handleClose}>
            Não
          </button>
          <button type="button" className="btn primary" onClick={handleRemove}>
            Sim
          </button>
        </div>
      </div>
    </ModalContainer>
  );
}

ModalRemove.propTypes = {
  showModal: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

ModalRemove.defaultProps = {
  showModal: false,
};
