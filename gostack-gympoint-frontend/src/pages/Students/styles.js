import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const modalAppear = keyframes`
  from {
    transform: translate(0, -50%);
  }

  to {
    transform: translate(0, 0);
  }
`;

export const Modal = styled.div`
  position: absolute;
  display: ${props => (props.modalState ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: ${props => (props.modalState ? 1 : 0)};
  transition: all 0.5s;

  &::before {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: ${props => (props.modalState ? 0.6 : 0)};
    z-index: 1;
    transition: all 0.5s;
  }

  .modal-dialog {
    display: flex;
    flex-direction: column;
    width: ${props => props.size};
    background: #fff;
    border-radius: 4px;
    z-index: 5;
    animation: ${modalAppear} 0.2s linear;
    transition: all 0.5s;
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    font-weight: bold;
    font-size: 1.1rem;
    padding: 15px 20px;
  }

  .modal-body {
    padding: 20px;
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px;

    button {
      margin-left: 15px;
    }
  }
`;
