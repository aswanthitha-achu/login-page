import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
<Route path='/' element={<Login/>}></Route>
<Route path='/signup' element={<Signup/>}></Route>

</Routes>

</BrowserRouter>
);


