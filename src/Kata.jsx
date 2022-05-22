import React from 'react';
import kata from './img/katerina-maskova.jpg';

const Kata = () => {
  return (
    <div className="card">
      <h2>Kateřina Mašková</h2>
      <div className="card__photo">
        <img className="profile-pic" src={kata} alt="kata-img" />
      </div>
      <div className="card__text">
        <p className="quote">
          "Na webovém vývoji mě nejvíc baví ten moment, kdy na to člověk
          “přijde” a najednou kód dělá, co má, a také fakt, že je neustále, co
          poznávat a není nikdy nuda."
        </p>
      </div>
    </div>
  );
};

export default Kata;
