import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import './style.css';
import {ContextProvider} from './componets/SocketContext';
import {createRoot} from 'react-dom/client';
const rootElement = document.getElementById('root');
root = createRoot(rootElement);
root.render(
    <ContextProvider>
        <App/>
    </ContextProvider>,
    document.getElementById('root')
);

