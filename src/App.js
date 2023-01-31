import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Component/Login";
import Home from "./Component/Home";
import PrivateComponent from './Component/PrivateComponent';
import Register from "./Component/Register"
import Suit from "./Component/Suit"
import AddSaree from './Component/AddSaree';
import SecondPrivate from './Component/SecondPrivate';
import AddSuit from './Component/AddSuit';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<PrivateComponent><Home/></PrivateComponent>}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/suit" element={<PrivateComponent><Suit /></PrivateComponent>}></Route>
      <Route path="/AddSaree" element={<SecondPrivate><AddSaree /></SecondPrivate>}></Route>
      <Route path="/AddSuit" element={<SecondPrivate><AddSuit /></SecondPrivate>}></Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
