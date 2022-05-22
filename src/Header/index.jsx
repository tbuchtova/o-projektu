import React from 'react';
import bookIcon from '../img/books.png';
import './style.css';

const Header = () => {
  return (
    <>
      <header>
        <div className="header">
          <h1>Booklog</h1>
          <img className="header-icon" src={bookIcon} alt="book-icon" />
        </div>
      </header>
    </>
  );
};

export default Header;
