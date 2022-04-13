import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import store from './store/store.config';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={ store }>
        <BrowserRouter basename={ process.env.PUBLIC_URL } >
            <App/>
        </BrowserRouter>
    </Provider>
);