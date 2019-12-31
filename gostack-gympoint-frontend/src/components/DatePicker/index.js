import React, { useRef, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import pt from 'date-fns/locale/pt';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        selected={new Date()}
        name={fieldName}
        ref={ref}
        locale={pt}
        dateFormat="dd/MM/yyyy"
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
}
