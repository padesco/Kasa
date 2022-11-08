import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Main from './layouts/Main/Main';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Lodging from './pages/Lodging/Lodging';
import Error from './pages/Error/Error';

import './index.css';

// Création du contenu et des routes
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Main>
        `<Routes>
          <Route element={<Navigate replace to="/home" />} path="/" />
          <Route path="home" element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path="lodgings/:lodgingId" element={<Lodging />} />
          <Route path='*' element={<Error />} />
        </Routes>`
      </Main>
    </Router>
  </React.StrictMode>
);