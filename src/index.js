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
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import UseCases from './pages/Use_Cases/UseCases';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ '/' } element={ <App /> }>
          <Route index element={ <Home /> } />
          <Route path='/signup' element={ <SignUp /> } />
          <Route path='/login' element={ <LogIn /> } />
          <Route path='/pricing' element={ <Pricing /> } />
          <Route path='/blog' element={ <Blog /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/use-cases' element={ <UseCases /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

