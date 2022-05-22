import React from 'react';
import bookIcon from '../img/book-icon.svg';
import './style.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>Booklog</h1>
        <img className="header-icon" src={bookIcon} alt="book-icon" />
      </header>
    </>
  );
};

export default Header;
