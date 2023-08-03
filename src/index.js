import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor, store } from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/app/App';


ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter >
        <App />
    </BrowserRouter>


    // <Provider store={store}>
    //     <PersistGate loading={null} persistor={persistor}>
    //         <BrowserRouter >
    //             <App />
    //         </BrowserRouter>
    //     </PersistGate>
    // </Provider>
);

