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
          <p className="quote">Text o mně</p>
        </div>
      </div>
    </>
  );
};

export default Terka;
