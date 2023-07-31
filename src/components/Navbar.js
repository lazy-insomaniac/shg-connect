import React, { useState } from "react";
import UnderlineAnimation from "./UnderlineAnimation";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles
import Header from "./Header";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Header />
        <nav
          className="navbar navbar-expand-lg navbar-light text-white md:ml-5 flex-grow"
          style={{ backgroundColor: "#0F2661" }}
        >
          <div className="container-fluid">
            <span
              className="navbar-brand mb-0 h1 text-white text-4xl font-light"
              style={{ fontFamily: "Lemon" }}
            >
              SHG CONNECT
            </span>
            <div
              className="items-center justify-center md:justify-start md:pl-4 md:ml-5"
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
                  <a className="nav-link disabled text-white mr-4">A/c</a>
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