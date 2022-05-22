import React from 'react';

const Homepage = () => {
  return (
    <div className="card">
      <h2>Homepage</h2>
      <div className="card__text">
        <p>
          Cílem této stránky je představení závěrečného projektu vytvářeného v
          rámci Digitalní Akademie: WEB, jaro 2022.
        </p>
        <p>TÝM: Kateřina Mašková & Tereza Plecitá</p>
        <p>MENTOŘI: Boris Musatov & Věra Kasperová</p>
        <h3>Odkazy:</h3>
        <p className="card__text--center">
          <a
            target={'_blank'}
            href="https://www.figma.com/file/uWnLByoQDETiyTVrYe48fJ/Booklog?node-id=0%3A1"
          >
            Wireframes
          </a>
        </p>
        <p className="card__text--center">
          <a target={'_blank'} href="https://github.com/tplecita/o-projektu">
            Zdrojový kód
          </a>
        </p>
      </div>
    </div>
  );
};

export default Homepage;
