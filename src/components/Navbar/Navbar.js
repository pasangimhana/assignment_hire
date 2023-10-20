import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Navbar = ({ home, category, contact, about, back_page }) => {
  return (
    <div>
      <nav>
        <Link to="/">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
            <div className={home}></div>
          </li>
          <li>
            <Link to="/home-category">Category</Link>
            <div className={category}></div>
          </li>
          <li className="contactUs-link">
            <Link to="/contactus">Contact Us</Link>
            <div className={contact}></div>
          </li>
          <li>

            <Link to="/about">About</Link>
            <div className={about}></div>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
