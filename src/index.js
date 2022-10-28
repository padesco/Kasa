import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Main from './layouts/Main/Main';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Lodging from './pages/Lodging/Lodging';
import Error from './pages/Error/Error';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      line-height: 142.6%;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      margin: 0;
    }
    html, body {
      width: 100%;
      height: 100%;
    }
    #root {
      min-height: 100%;
      margin: 0 auto;
      position: relative;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Main>
        `<Routes>
          <Route element={<Navigate replace to="/home" />} path="/" />
          <Route path="/home" element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path="lodgings/:lodgingId" element={<Lodging />} />
          <Route path='*' element={<Error />} />
        </Routes>`
      </Main>
    </Router>
  </React.StrictMode>
);