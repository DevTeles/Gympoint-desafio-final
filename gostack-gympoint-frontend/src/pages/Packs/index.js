import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { removeRequest } from '~/store/modules/pack/actions';

import { formatPrice } from '~/utils/format';
import ModalRemove from '~/components/Modal/remove';

import history from '~/services/history';
import api from '~/services/api';

import { Container } from './styles';

export default function Packs() {
  const dispatch = useDispatch();

  const [packs, setPacks] = useState([]);
  const [pack, setPack] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function loadPacks() {
    const response = await api.get('packs');
    const data = response.data.map(p => ({
      ...p,
      formatedPrice: formatPrice(p.price),
    }));
    setPacks(data);
  }

  useEffect(() => {
    loadPacks();
  }, []);

  function handleEdit(id) {
    history.push(`packs/${id}`);
  }

  function openModal(studentToRemove) {
    setPack(studentToRemove);
    setShowModal(true);
  }

  function hideModal() {
    setShowModal(false);
  }

  function handleRemove() {
    dispatch(removeRequest(pack));

    const packIndex = packs.findIndex(i => i.id === pack.id);
    const packsUpdated = packs.slice(0, packIndex);
    if (packIndex) {
      setPacks(packsUpdated);
    }
    setShowModal(false);
  }

  return (
    <Container>
      <div className="page-title">
        <h1>Gerenciando planos</h1>
        <div className="actions">
          <Link to="/packs/new" className="btn primary">
            <MdAdd size={16} color="#fff" />
            Cadastrar
          </Link>
        </div>
      </div>

      <div className="content">
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th align="center">Duração</th>
              <th align="center">Valor p/mês</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {packs.length ? (
              packs.map(p => (
                <tr key={p.id}>
                  <td>{p.title}</td>
                  <td align="center">
                    {p.duration === 1
                      ? `${p.duration} mês`
                      : `${p.duration} meses`}{' '}
                  </td>
                  <td align="center">{p.formatedPrice}</td>
                  <td className="actions">
                    <button
                      type="button"
                      className="link"
                      onClick={() => handleEdit(p.id)}
                    >
                      editar
                    </button>
                    <button
                      type="button"
                      className="link danger"
                      onClick={() => openModal(p)}
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
