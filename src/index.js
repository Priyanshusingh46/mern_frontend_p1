import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from './App';
import Login from "./Component/Login";
import Home from "./Component/Home";
import PrivateComponent from './Component/PrivateComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />,
  document.getElementById("root")
);

