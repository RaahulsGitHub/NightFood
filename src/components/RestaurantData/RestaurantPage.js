import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetSwiggyRestInfo from "../../utilities/Hooks/useGetSwiggyRestInfo";
import Shimmer from "../Shimmer";
import { FaStar } from "react-icons/fa";
import { CDN_IMG_URL } from "../../utilities/constants";
import RestaurantMenu from "./RestaurantMenu";

function RestaurantPage() {
  const { resId } = useParams();

  const restInfo = useGetSwiggyRestInfo(resId);
  if (!restInfo)
    return (
      <div className="flex justify-center">
        <Shimmer />
      </div>
    );
  // console.log(restInfo);
  return (
    <div className="flex flex-col border w-[75%] mx-auto items-center">
      <div className="flex justify-between w-[90%] mt-6 border-b border-dashed">
        <div className="py-6 px-10 text-gray-500 mb-2">
          <div className="mb-5">
            {/* Rest Name and other info */}
            <h1 className="font-bold text-gray-800 text-xl mb-1">
              {restInfo?.cards[0]?.card?.card?.info?.name}
            </h1>
            <p className="text-xs">
              {restInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
            </p>
            <p className="text-xs">
              <span>{restInfo?.cards[0]?.card?.card?.info?.locality}</span>
              <span>
                ,{" "}
                {
                  restInfo?.cards[0]?.card?.card?.info?.sla
                    ?.lastMileTravelString
                }
              </span>
            </p>
          </div>
          <div className="">
            {/* Delivery fee string */}
            {/* If rest is far away condition message */}
            <p className="flex text-sm">
              <span>
                <img
                  className="w-5 mt-[2px] mr-1"
                  src={
                    CDN_IMG_URL +
                    restInfo?.cards[0]?.card?.card?.info?.feeDetails?.icon
                  }
                />
              </span>
              <span>
                {restInfo?.cards[0]?.card?.card?.info?.feeDetails?.message}
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center w-[20%]">
          <div className="w-[38%] h-[54%] flex flex-col items-center border p-1 pt-2 rounded-lg shadow-lg">
            <p className="flex font-bold text-base text-green-600 border-b border-gray-200 p-1">
              <FaStar className="mr-1 mt-[2px]" />
              {restInfo?.cards[0]?.card?.card?.info?.avgRatingString}
            </p>
            <p className="font-semibold text-xs text-gray-400 mt-2">
              {restInfo?.cards[0]?.card?.card?.info?.totalRatingsString}
            </p>
          </div>
        </div>
      </div>

      <div className="w-[85%] p-3">
        <p className="font-bold text-lg text-gray-700">{restInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
          <RestaurantMenu menu={restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards}/>
      </div>
    </div>
  );
}

export default RestaurantPage;
