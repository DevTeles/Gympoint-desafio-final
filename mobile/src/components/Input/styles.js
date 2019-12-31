import styled from 'styled-components/native';

export const Container = styled.View`
  height: 46px;
  background: #ffffff;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  flex: 1;
  font-size: 15px;
  color: #333;

  border: 1px solid #dddddd;

  padding-left: 20px;

  /* ::placeholder {
    padding-left: 20px;
  } */
`;
