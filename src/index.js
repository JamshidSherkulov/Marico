import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';
import Home from './pages/Home/Home';
import Pricing from './pages/Pricing/Pricing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ '/' } element={ <App /> }>
          <Route path='/signup' element={ <SignUp /> } />
          <Route path='/login' element={ <LogIn /> } />
          <Route index element={ <Home /> } />
          <Route path='/pricing' element={ <Pricing /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

