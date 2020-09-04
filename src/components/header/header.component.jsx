import React from "react";

const Header = ({ category, handleCategoryChange }) => {
  return (
    <header>
      <select value={category} onChange={handleCategoryChange}>
        <option value="18">Computer Science</option>
        <option value="19">Mathematics</option>
        <option value="9">General Knowledge</option>
        <option value="10">Books</option>
        <option value="11">Films</option>
        <option value="14">Television</option>
        <option value="12">Music</option>
        <option value="">Mixed</option>
      </select>
    </header>
  );
};

export default Header;
