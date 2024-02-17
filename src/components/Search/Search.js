import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

function Search() {
  return (
    <div className=" flex justify-center mx-auto w-[80%] mt-10">
      <div className='w-[70%] relative'>
      <input className='border-2 border-gray-400 outline-none rounded-lg h-10 w-full p-3 text-gray-700 font-semibold hover:shadow-lg' type="text" placeholder='search for restaurant and food'/>
      <IoSearchOutline className='text-gray-400 absolute right-2 top-2 cursor-pointer hover:text-gray-600' size={25} />
      </div>
    </div>
  )
}

export default Search