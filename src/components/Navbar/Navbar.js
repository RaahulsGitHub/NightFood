import React from 'react'
import Logo from "../../assets/images/logo.png"
function Navbar() {
  return (
    <div className='flex justify-between  p-2 shadow-b shadow-lg' >
        <div className='flex justify-center w-[30%] '>
            <img className='w-24' src={Logo} alt="logo" />
        </div>
        <div className='flex flex-col justify-center  w-[50%] '>
            {/* nav items [search, Food, cart, profile] */}
            <ul className='flex justify-around  w-[80%]'>
                <li className='cursor-pointer text-gray-600 hover:font-semibold hover:text-black'>Search</li>
                <li className='cursor-pointer text-gray-600 hover:font-semibold hover:text-black'>Food</li>
                <li className='cursor-pointer text-gray-600 hover:font-semibold hover:text-black'>Cart</li>
                <li className='cursor-pointer text-gray-600 hover:font-semibold hover:text-black'>Profile</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar