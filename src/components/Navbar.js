import React, { useState } from "react";
import UnderlineAnimation from "./UnderlineAnimation";

const Navbar = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{
            backgroundColor: "#0F2661",
            color: "white",
            marginRight: "1.25rem", // 1.25rem = 1.25 * 16px = 20px
          }}
        >
          <div className="container-fluid">
            <span
              className="navbar-brand mb-0 h1"
              style={{
                color: "white",
                fontFamily: "Lemon",
                fontSize: "2rem", // 2rem = 2 * 16px = 32px
                fontWeight: "lighter",
              }}
            >
              SHG CONNECT
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarRightAlignExample"
              aria-controls="navbarRightAlignExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarRightAlignExample"
            >
              <ul className="navbar-nav">
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
                  <a
                    className="nav-link disabled"
                    style={{ color: "white", marginRight: "0.625rem" }} // 0.625rem = 0.625 * 16px = 10px
                  >
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


