import React from "react";
import logo from "../logo.png";
import { AddButton } from "./add-button";
import { Link } from 'react-router-dom'

const handleInputChange = (event) => {
  event.persist();
  console.log(event.target.value);
}

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">
      <figure className="navbar--logo-container">
        <img src={logo} alt="Uma imagem impressionante" />
      </figure>
    </Link>
    <div className="navbar--center-container">
      <input role="search" placeholder="Procure uma receita" aria-labelledby="search" onChange={handleInputChange} />
    </div>
    <div className="navbar--right-container">
      <Link to="/register"><AddButton /></Link>
    </div>
  </nav>
);

export { Navbar };
