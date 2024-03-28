"use client";
import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <>
      <h2 className="text-2xl p-2 font-bold">Top Restaurant chains in Pune</h2>
      <div className="flex flex-wrap gap-4">
        {listOfRestaurants.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        )}
      </div>
    </>
  );
};

export default RestaurantList;
