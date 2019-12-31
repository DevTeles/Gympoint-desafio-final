import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Container } from './styles';
import Header from '../../components/Header';

export default function Layout({ children, isGoBack, page }) {
  return (
    <Wrapper>
      <Header isGoBack={isGoBack} page={page} />
      <Container>{children}</Container>
    </Wrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  isGoBack: PropTypes.bool,
  page: PropTypes.string,
};

Layout.defaultProps = {
  isGoBack: false,
  page: '',
};
