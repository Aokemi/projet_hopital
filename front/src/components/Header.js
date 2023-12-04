import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  const [admin, setAdmin] = useState(false)
  const [isOnline, setIsOnline] = useState(false)

  useEffect(() => {

    const getCurrentUser = JSON.parse(localStorage.getItem("User")) || []

    if (!getCurrentUser) {
      setAdmin(false)
      setIsOnline(false)
      return
    }

    if (getCurrentUser.role === "Admin") {
      setAdmin(true)
      setIsOnline(true)
    } else if (getCurrentUser.role === "User") {
      setAdmin(false)
      setIsOnline(true)
    }
  }, [admin, isOnline])

  const handleClick = () => {
    localStorage.removeItem("User")
    setAdmin(false)
    setIsOnline(false)
  }

  return (
    <header>
      <main className="container">
        <section id="logo">
          <NavLink to="/">
            <img className="logo" src="http://localhost:3000/img/logo.png" alt="logo du projet" /> {/*Il faudra changer le localhost sur l'IDE */}
          </NavLink>
        </section>
        <nav className="navbar">

          {admin && (
            <li className="welcome-admin"> Bienvenue l'admin !</li>
          )}

          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/media">Espace médias</NavLink>
          <NavLink to="/speciality">Spécialités</NavLink>
          
          {isOnline && (
            <>
            <NavLink to="/appointment">Rendez-vous</NavLink>
            <NavLink to="/appointments">Mes rendez-vous</NavLink>
            </>
          )}

          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/map">Carte</NavLink>
        </nav>
        
        {isOnline ? (
          <NavLink to="/login" className="logout-button" onClick={handleClick}>Se déconnecter</NavLink>
        ) : (
          <>
            <NavLink to="/register" className="logout-button">Inscription</NavLink>
            <NavLink to="/login" className="login-button">Se connecter</NavLink>
          </>
        )}

      </main>
    </header>
  );
};

export default Header;
