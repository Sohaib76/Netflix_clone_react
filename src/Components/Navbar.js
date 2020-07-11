import React, { useEffect, useState } from "react";
import "./NavBar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      {/* <img
        className="nav__avatar"
        src="https://www.icone-png.com/png/2/1886.png"
        alt="Avatar"
      /> */}

      <button className="nav__avatar">Sign In</button>
    </div>
  );
}

export default Navbar;
