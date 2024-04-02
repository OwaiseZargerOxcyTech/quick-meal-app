"use client";
import React, { useState } from "react";

const SearchPage = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredRestaurant(filteredRestaurant);
  };

  return (
    <div className="search m-4 p-4">
      <input
        type="text"
        data-testid="searchInput"
        className="border border-solid border-black"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchPage;
