import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Appcontextprovider from './context/Appcontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
       <Appcontextprovider>
         <BrowserRouter>
            <App />
        </BrowserRouter>
       </Appcontextprovider>
);


