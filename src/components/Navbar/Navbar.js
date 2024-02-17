import React from 'react'
import Logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex justify-between  p-2 shadow-b shadow-lg' >
        <div className='flex justify-center w-[30%] '>
           <Link to={"/"}>
           <img className='w-24' src={Logo} alt="logo" />
           </Link> 
        </div>
        <div className='flex flex-col justify-center  w-[50%] '>
            {/* nav items [search, Food, cart, profile] */}
            <ul className='flex justify-around  w-[80%]'>
                <Link to={"/"}>
                <li className='cursor-pointer text-gray-600 hover:font-semibold hover:text-black'>Food</li>
                </Link>
               <Link to={"/search"}>
                <li className='cursor-pointer text-gray-600 hover:font-semibold hover:text-black'>Search</li>
               </Link>
                <Link to={"/cart"}>
                <li className='cursor-pointer text-gray-600 hover:font-semibold hover:text-black'>Cart</li>
                </Link>
                <Link>
                <li className='cursor-pointer text-gray-600 hover:font-semibold hover:text-black'>Profile</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar