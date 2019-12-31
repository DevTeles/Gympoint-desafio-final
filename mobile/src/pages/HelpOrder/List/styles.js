import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;
export const OrderList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {paddingBottom: 30},
})`
  margin-top: 20px;
`;
export const Order = styled.TouchableOpacity`
  background-color: #fff;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #dddddd;
  margin-bottom: 10px;
`;
export const OrderInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: baseline;
`;
export const StatusInfo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Status = styled.Text`
  color: ${props => (props.answered ? '#42CB59' : '#999999')};
  font-size: 14px;
  font-weight: bold;
  margin-left: 2px;
`;
export const Time = styled.Text`
  font-size: 13px;
  color: #666666;
`;
export const Question = styled.Text`
  font-size: 14px;
  color: #666666;
  line-height: 26px;
`;
export const HelpOrderButton = styled(Button)``;
