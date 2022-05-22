import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './style.css';
import Projekt from './Projekt';
import Kata from './Kata';
import Terka from './Terka';
import Homepage from './Homepage';
import Footer from './Footer';
import Header from './Header';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <nav className="nav-main">
          <Link to="/">Homepage</Link>
          <Link to="/projekt">O projektu</Link>
          <Link to="/kata">Kateřina Mašková</Link>
          <Link to="/terka">Tereza Plecitá</Link>
        </nav>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Homepage />} />
        <Route path="projekt" element={<Projekt />} />
        <Route path="kata" element={<Kata />} />
        <Route path="terka" element={<Terka />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
