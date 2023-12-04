import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <main className="container">
        <section id="logo">
          <NavLink to="/">
            <img className="logo" src="http://localhost:3000/img/logo.png" alt="logo du projet" />
          </NavLink>
        </section>
        <section id="info">
          <article>
            <small>Copyright © 2023 Hôpital - La Roseraie. Tous droits réservés.</small>
          </article>
        </section>
      </main>
    </footer>
  );
};

export default Footer;