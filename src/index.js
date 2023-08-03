import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';

import  App  from 'components/app/App';


ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename='/goit-react-hw-08-phonebook'>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
);