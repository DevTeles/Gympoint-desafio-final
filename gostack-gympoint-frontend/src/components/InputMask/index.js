import React, { useRef, useEffect } from 'react';
import InputMask from 'react-input-mask';

import { useField } from '@rocketseat/unform';

export default function ReactInputMask({ name, mask, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.value',
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <InputMask name={fieldName} mask={mask} {...rest} ref={ref} />

      {error && <span>{error}</span>}
    </>
  );
}
