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
        <p>
          wireframes:{' '}
          <a
            target={'_blank'}
            href="https://www.figma.com/file/uWnLByoQDETiyTVrYe48fJ/Booklog?node-id=0%3A1"
          >
            WIP na Figmě
          </a>
        </p>
        <p>
          <a target={'_blank'} href="">
            odkaz na stránky
          </a>
        </p>
      </div>
    </div>
  );
};

export default Homepage;
