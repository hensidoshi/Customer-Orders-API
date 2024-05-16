import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from './Components/Home';
import React_API from "./Components/React_API";
import Order_detail from './Components/Order_detail';
import Order_add from './Components/Order_add';
import Order_edit from './Components/Order_edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}> 
    <Route path="/Home" element={<Home/>}> </Route>
    <Route path="/getall" element={<React_API/>}></Route>
    <Route path="/getbyid/:id" element={<Order_detail/>}></Route>
    <Route path="/insert" element={<Order_add/>}></Route>
    <Route path="/update/:id" element={<Order_edit/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
);