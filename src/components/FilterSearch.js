// FilterSearch.js
import React, { useState } from 'react';

const FilterSearch = ({ onFilterChange }) => {
  const [type, setType] = useState('restaurant');
  const [keyword, setKeyword] = useState('');

  const handleTypeChange = (event) => {
    setType(event.target.value);
    onFilterChange(event.target.value, keyword);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
    onFilterChange(type, event.target.value);
  };

  return (
    <div className="filter-search">
      <label htmlFor="type">Type:</label>
      <select id="type" value={type} onChange={handleTypeChange}>
        <option value="restaurant">Restaurant</option>
        <option value="bakery">Bakery</option>
        <option value="cafe">Cafe</option>
      </select>
      <label htmlFor="keyword">Keyword:</label>
      <input 
        type="text" 
        id="keyword" 
        value={keyword} 
        onChange={handleKeywordChange} 
        placeholder="Search by name or keyword"
      />
    </div>
  );
};

export default FilterSearch;
