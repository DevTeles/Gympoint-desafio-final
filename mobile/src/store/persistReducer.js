import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export default reducers => {
  return persistReducer(
    {
      key: 'gympoint',
      storage: AsyncStorage,
      whitelist: ['auth'],
    },
    reducers
  );
};
