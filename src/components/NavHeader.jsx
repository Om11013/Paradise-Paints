import React from 'react';
import logo from '../assets/logo.jpg';
 import '/src/components/navheader.css';

const NavHeader = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="site-name">Paradise</h1>
        </div>

        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><button className="register-button">Register</button></li>
        </ul>
      </nav>
    </>
  );
};

export default NavHeader;
