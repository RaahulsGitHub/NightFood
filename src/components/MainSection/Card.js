import React, { useEffect } from 'react'
import { CDN_IMG_URL } from '../../utilities/constants'

function Card({name, rating, time, cuisines, location,imageId}) {
//    console.log(name,rating,time,cuisines,location,imageId)

    
  return (
    <div className='px-2 w-72 mt-5 mx-1 my-2 cursor-pointer hover:shadow-lg py-2 rounded-lg'>
        <div className='my-1'>
            <img className='w-full scale-100 h-48 rounded-xl shadow-inner' src={CDN_IMG_URL+imageId} alt="" />
        </div>
        <div className='px-2'>
           <p className='text-xl font-semibold truncate'>{name}</p>
           <p className='text-lg font-semibold'>⭐ <span>{rating}</span>  •  <span>{time}</span></p>
           <p className='text-[17px] text-gray-600 truncate'>{cuisines.join(", ")}</p>
           <p className='text-[17px] text-gray-600'>{location}</p>
        </div>
    </div>
  )
}

export default Card