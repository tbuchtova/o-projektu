import React from 'react';
import terka from './img/tereza_plecita.jpg';

const Terka = () => {
  return (
    <>
      <div className="card">
        <h2>Tereza Plecitá</h2>
        <div className="card__photo">
          <img className="profile-pic" src={terka} alt="terka-img" />
        </div>
        <div className="card__text">
          <p className="quote">
            "Po absolvování kurzu HTML a CSS mi začal webový vývoj připadat jako
            suprová magie a jako správný Potterhead jsem si řekla, že se musím
            naučit i ten Javascript. Proto jsem šla na DA WEB :) A pořád mi to
            všechno přijde jako magie..."
          </p>
        </div>
      </div>
    </>
  );
};

export default Terka;
