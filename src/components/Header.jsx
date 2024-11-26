import React, { useState } from 'react';
import logo from '../assets/img/logos/IIEST_Shibpur_Logo.png';
import { Link } from 'react-router-dom';


function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Toggle menu clicked");
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div id="header" className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <img src={logo} alt="Logo" />
        </Link>
        <nav
          id="navmenu"
          className={`navmenu ${isMobileMenuOpen ? 'active' : ''}`}
        >
          <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/committee">Committee</Link></li>
            <li><Link to="/aboutus">About the Symposium</Link></li>
            <li><Link to="/registration">Registration</Link></li>
          </ul>
        </nav>
        {/* <div className="mobile-nav-toggle-wrapper d-xl-none" onClick={toggleMenu}>
          <i className={`mobile-nav-toggle bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`} />
        </div> */}
        <Link className="btn-getstarted" to="/contactus">Contact Us</Link>
      </div>
    </div>
  );
}

export default Header;
