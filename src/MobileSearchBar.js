// SearchBar.js
import React from "react";
import "./MobileSearchBar.css";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const MobileSearchBar = ({ onClose, onSearch, isSearchOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Passing the search term to the parent component
    onSearch(searchTerm);
  };

  const handleSearchClose = () => {
    onClose(); // Call the onClose function passed as a prop
  };

  return (
    <div className={`search-bar ${isSearchOpen ? "show" : ""}`}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleSearch}
      />
      <button onClick={handleSearchClose}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default MobileSearchBar;
