import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const Avatar = styled.Image`
  margin-top: 30px;
  height: 120px;
  width: 120px;
  border-radius: 60px;
`;
export const Info = styled.View`
  margin-top: 30px;
  align-items: center;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;
export const Email = styled.Text`
  font-size: 13px;
  color: #999;
`;

export const SingOutButton = styled(Button)`
  margin-top: 10px;
  background: #ee4e62;
  width: 320px;
`;
