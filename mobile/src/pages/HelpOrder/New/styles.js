import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const QuestionInput = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  font-size: 15px;
  /* height: 300px; */
  color: #333;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #dddddd;

  padding-left: 20px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;
