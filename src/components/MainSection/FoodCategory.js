import React, { useEffect, useRef } from "react";
import useSwiggyData from "../../utilities/Hooks/usegetSwiggyData";
import { useSelector } from "react-redux";
import { CDN_IMG_URL } from "../../utilities/constants";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function FoodCategory() {
  const sliderRef = useRef();

  useSwiggyData();
  const categories = useSelector((store) => store.FoodCategoryItems);
  // console.log(categories);

  const sliderLeft = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 500;
  };
  const sliderRight = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 500;
  };

  return (
    <div className=" w-[80%] mt-5 border-b border-gray-300">

      <div className="flex justify-between">
        {/* heading "What's on your mind" */}
        <h1 className="font-semibold ml-6 text-xl">What's on your mind?</h1>
        <div className="flex flex-row items-center justify-between w-16">
          <FaArrowLeft
            onClick={sliderLeft}
            className="text-2xl p-0.5 cursor-pointer hover:bg-gray-300 text-gray-600 rounded-full "
          />
          <FaArrowRight
            onClick={sliderRight}
            className="text-2xl p-0.5 cursor-pointer hover:bg-gray-300 text-gray-600 rounded-full "
          />
        </div>
      </div>
      <div
        ref={sliderRef}
        className="flex overflow-x-hidden overflow-y-auto scroll whitespace-nowrap scroll-smooth hide-scrollbar"
      >
        {/* food category [Chinese, rolls, ...] */}

        {categories?.map((item) => {
          return (
            <img
              className="w-36 mb-2 mx-4 py-2 hover:shadow-md cursor-pointer"
              key={item?.id}
              src={CDN_IMG_URL + item?.imageId}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FoodCategory;
