import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Component/Login";
import Home from "./Component/Home";
import PrivateComponent from './Component/PrivateComponent';
import Register from "./Component/Register"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<PrivateComponent><Home/></PrivateComponent>}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
