import styled from 'styled-components';
import { colors } from '~/styles/colors';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 64px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  padding: 0 20px;

  img {
    margin-right: 20px;
  }
`;

export const Nav = styled.ul`
  flex: 1;
  display: flex;
  border-left: 1px solid #ddd;
  padding: 5px 0 5px 20px;

  a {
    margin-right: 15px;
    font-size: 0.85rem;
    font-weight: bold;
    color: #999;
    text-transform: uppercase;
    transition: color 0.2s;

    &:hover {
      color: #444;
    }

    &.active {
      color: #444;
    }
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  strong {
    font-size: 0.85rem;
  }

  a {
    color: ${colors.primary};
    font-size: 0.8rem;

    &:active {
      color: #444;
    }
  }
`;
