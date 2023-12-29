import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './App';
import NotFound from './components/NotFound';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Project from './components/Project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/landingpage' element={<App/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/project/:projectid" element={<Project/>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
