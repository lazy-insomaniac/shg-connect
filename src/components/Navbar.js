import React from 'react';
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import UnderlineAnimation from './UnderlineAnimation';

const Navbar = () => {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: '#0F2661', color: 'white', marginRight: '1.25rem' }}
        >
          <div className="container-fluid">
            <span
              className="navbar-brand mb-0 h1"
              style={{ color: 'white', fontFamily: 'Lemon', fontSize: '2rem', fontWeight: 'lighter' }}
            >
              SHG CONNECT
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarRightAlignExample"
              aria-controls="navbarRightAlignExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" style={{ color: 'white' }} id="navbarRightAlignExample">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <UnderlineAnimation text="HOME" />
                </li>
                <li className="nav-item">
                  <UnderlineAnimation text="PROFILE" />
                </li>
                <li className="nav-item">
                  <UnderlineAnimation text="ABOUT" />
                </li>
                <li className="nav-item">
                  <UnderlineAnimation text="CONTACT" />
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" style={{ color: 'white', marginRight: '0.625rem' }}>
                    A/c
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

