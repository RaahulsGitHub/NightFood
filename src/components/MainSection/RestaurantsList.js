import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import Shimmer from "../Shimmer";

function RestaurantsList() {
  const restaurants = useSelector((store) => store.restaurantList);
 
//   console.log(restaurants);
  return (!restaurants ? <Shimmer/>:
    <div className=" mt-5 w-[80%]">
      <h1 className="font-semibold ml-6 text-xl">
        Restaurants with online food delivery in Pune
      </h1>
      <div className="flex flex-wrap justify-start" >
      {restaurants?.map((rest)=>{

        
      return (
            <Card
            key={rest?.info?.id}
            name={rest?.info?.name}
            rating={rest?.info?.avgRating}
            time={rest?.info?.sla?.slaString}
            cuisines={rest?.info?.cuisines}
            location={rest?.info?.areaName}
            imageId={rest?.info?.cloudinaryImageId}
            />
            )
        })}
        </div>
    </div>
  );
}

export default RestaurantsList;
