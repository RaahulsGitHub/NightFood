import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import MenuItems from './MenuItems';
function RestaurantMenu({menu}) {
    const categories = menu.filter((item)=>
        item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        
        const [showMenuItems, setShowMenuItems] = useState(true);
        const handleArrowClick = ()=>{
          setShowMenuItems(!showMenuItems)
        }
        
       
        console.log(categories)
  return (
    <div className='mt-4'>

       {categories.map((category)=>  (
       <div  className='my-3 font-bold text-gray-700 border w-[100%] p-2'>
        <div key={category?.title} onClick={handleArrowClick} className='cursor-pointer flex justify-between items-center text-lg '>
            <h1>{category?.card?.card?.title}</h1>
            <IoMdArrowDropup size={30} className='' />
        </div>

        
      </div>
      
      )
      
       )}
       

    </div>
  )
}

export default RestaurantMenu