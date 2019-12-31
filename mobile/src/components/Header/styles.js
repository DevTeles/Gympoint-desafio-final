import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 64px;
  border: 0 solid #ddd;
  border-bottom-width: 1px;
  padding: 0 20px;
`;

export const GoBack = styled(TouchableOpacity)`
  position: absolute;
  left: 20px;
`;
