import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Link } from 'react-router-dom';
import { MdArrowBack, MdSave } from 'react-icons/md';
import { updateRequest } from '~/store/modules/enroll/actions';
import FormEnroll from './form';

import api from '~/services/api';
import { formatPrice } from '~/utils/format';

import { Container } from './styles';

export default function UpdateEnrolls({ match }) {
  const dispatch = useDispatch();

  const { id } = match.params;

  const [enroll, setEnroll] = useState('');

  useEffect(() => {
    async function loadEnroll() {
      const response = await api.get(`enrolls/${id}`);
      const data = {
        student_id: response.data.student_id,
        student_name: response.data.student.name,
        pack_id: response.data.pack_id,
        start_date: parseISO(response.data.start_date),
        end_date: format(parseISO(response.data.end_date), 'dd/MM/yyyy', {
          locale: pt,
        }),
        totalPrice: formatPrice(
          response.data.pack.duration * response.data.pack.price
        ),
      };

      setEnroll(data);
    }
    loadEnroll();
  }, [id]);

  function handleSubmit({ student_id, pack_id, start_date }) {
    dispatch(updateRequest(id, student_id, pack_id, start_date));
  }

  return (
    <Container>
      <div className="page-title">
        <h1>Gerenciando matrículas</h1>
        <div className="actions">
          <Link to="/enrolls" className="btn secondary">
            <MdArrowBack size={16} color="#fff" />
            Voltar
          </Link>
          <button form="enroll" type="submit" className="btn primary">
            <MdSave size={16} color="#fff" />
            Salvar
            {/* {loading ? 'Carregando..' : 'Salvar'} */}
          </button>
        </div>
      </div>
      <div className="content">
        <FormEnroll initialData={enroll} onSubmit={handleSubmit} />
      </div>
    </Container>
  );
}
