import React, { useRef } from 'react';
import logo from "./logo.png";



const Navbar = () => {
    return (
        <nav className="navbar  navbar-expand-xl">
        <div className="container-fluid">
          <img className="logoPic" src={logo} />
          <a className="logotext me-auto" href="/">
            Rehan Zaheer
          </a>

          <div
            className="sidebar offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header ">
              <h5 className="offcanvas-title " id="offcanvasNavbarLabel">
                Navigation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link mx-lg-5" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-5" aria-current="page" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-5" aria-current="page" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-5" aria-current="page" href="#skills">
                    Skills
                  </a>
                </li>
              </ul>

              <div></div>
            </div>
          </div>
          <a href="#contact" className="conbtn">
            Contact Me!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    );
};

export default Navbar;