import React from 'react'
import FoodCategory from './FoodCategory'
import RestaurantsList from './RestaurantsList'

function MainSection() {

    
  return (
    <div className='flex flex-col items-center py-2 px-4'>
        <FoodCategory/>
        <RestaurantsList/>
    </div>
  )
}

export default MainSection