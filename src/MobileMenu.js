import React from "react";
import "./MobileMenu.css"; // Add your styling here

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu-drawer ${isOpen ? "open" : ""}`}>
      <div className="menuItems">
        <div className="texture"></div>
        <div className="menuSections">
          <p>Movies</p>
        </div>
        <div className="menuSections">
          <p>TV Shows</p>
        </div>
        <div className="menuSections">
          <p>Watch</p>
        </div>
        <div className="menuSections">
          <p>Community</p>
        </div>
      </div>

      <div className="close-btn" onClick={toggleMenu}>
        &times;
      </div>
    </div>
  );
};

export default MobileMenu;
