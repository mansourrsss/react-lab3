import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Provider } from "react-redux"
import { store } from "./store/store";
import './index.css';
import App from './App';
library.add(fab)

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);


root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
