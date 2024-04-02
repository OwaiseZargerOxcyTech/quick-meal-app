"use client";
import RestaurantMenuList from "@/components/RestaurantMenu";
import Shimmer from "@/components/Shimmer";
import { MENU_API } from "@/utils/constants";
import useRestaurantMenu from "@/utils/useRestaurantMenu";
import { useEffect, useState } from "react";

export default function RestaurantPage({ params }) {
  const resInfo = useRestaurantMenu(params.resid);

  if (!resInfo) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4 mt-4 ">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }
  return (
    <div className="restaurant-details">
      <RestaurantMenuList resInfo={resInfo} />
    </div>
  );
}
