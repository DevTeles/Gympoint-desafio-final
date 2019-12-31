import 'dotenv/config';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import history from '~/services/history';
import GlobalStyles from './styles/global';

import '~/config/reactotronConfig';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
          <ToastContainer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
