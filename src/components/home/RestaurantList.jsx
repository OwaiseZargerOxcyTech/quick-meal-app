"use client";
import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "../Shimmer";
import Link from "next/link";
// import { dummyRestaurantData } from "@/utils/RestaurantData";

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

    // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl p-2 font-bold">Top Restaurant chains in Pune</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {/* -------------------with swiggy api--------------------------------------  */}

        {listOfRestaurants.length === 0 ? (
          <div className="flex gap-4">
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
          </div>
        ) : (
          listOfRestaurants.map((restaurant) => (
            <Link href={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            </Link>
          ))
        )}

        {/* -------------------with dummy data--------------------------------------  */}

        {/* {dummyRestaurantData.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))} */}
      </div>
    </div>
  );
};

export default RestaurantList;
