import React, { useState } from "react";
import "./navbar.css";
import { HiMenuAlt2 } from "react-icons/hi";
import IMG from '../../assets/OWASP-nav-logo.png'

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src={IMG} alt="" className="logo__img" />
          {/* <h2>
            OWASP
          </h2> */}
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Event">Events</a>
            </li>
            <li>
              <a href="https://forms.gle/jGepb4EhiPJRhw4G7" target="_blank" rel="noreferrer">Feedback</a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <button onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <HiMenuAlt2 />
            </button>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
