import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Nav, User } from './styles';

import logo from '~/assets/logo-header.svg';

export default function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.profile.name);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Link to="/students">
        <img src={logo} alt="GymPoint" />
      </Link>
      <Nav>
        <li>
          <NavLink to="/students">Alunos</NavLink>
        </li>
        <li>
          <NavLink to="/packs">Planos</NavLink>
        </li>
        <li>
          <NavLink to="/enrolls">Matrículas</NavLink>
        </li>
        <li>
          <NavLink to="/help-orders">Pedidos de Auxílio</NavLink>
        </li>
      </Nav>
      <User>
        <strong>{userName}</strong>
        <Link to="/" onClick={handleSignOut}>
          sair do sistema
        </Link>
      </User>
    </Container>
  );
}
