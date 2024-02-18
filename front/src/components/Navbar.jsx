import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../images/logo.png';

function Navbar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []); // Adding empty dependency array to ensure the event listener is only added once

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <ScrollLink to="header" className="logo" smooth={true} duration={500}>
        <img src={logo} alt="" />
      </ScrollLink>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <ScrollLink to="header" smooth={true} duration={500}>
            Header
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="features" smooth={true} duration={500}>
            Features
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="offer" smooth={true} duration={500}>
            Offer
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
