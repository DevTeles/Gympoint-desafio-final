import React from 'react';

import { Wrapper, WrapperContent } from './styles';

import Header from '~/components/Header';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <WrapperContent>{children}</WrapperContent>
    </Wrapper>
  );
}
