import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <header className="header">
        <nav>
          <div className="nav__bar">
            <div className="logo">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="nav__menu__btn" id="menu-btn" onClick={toggleNavMenu}>
              <span className={`menu-icon ${isNavOpen ? 'open' : ''}`}>
                <span className="menu-icon-bar"></span>
                <span className="menu-icon-bar"></span>
                <span className="menu-icon-bar"></span>
              </span>
            </div>
          </div>
          <ul className={`nav__links ${isNavOpen ? 'show' : ''}`} id="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="/#service">Services</a>
            </li>
            <li>
              <a href="/#explore">Explore</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <Link to="/book">
            <button className="btn nav__btn">Book Now</button>
          </Link>
        </nav>
        <div className="section__container header__container" id="home">
          <p>Simple - Unique - Friendly</p>
          <h1>
            Make Yourself At Home
            <br />
            In Our <span>Homestays</span>.
          </h1>
        </div>
      </header>
    </>
  );
}

export default Navbar;
