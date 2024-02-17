import React, { useEffect } from 'react'
import { REST_INFO_API } from '../../utilities/constants';
import { useParams } from 'react-router-dom';


function RestaurantPage() {
    const {resId} = useParams();

    useEffect(()=>{
        getRestData();
    },[])

    const getRestData = async()=>{
        const data = await fetch(REST_INFO_API+resId);
        const json = await data.json();
        console.log(json)
    }

  return (
    <div>
        
    </div>
  )
}

export default RestaurantPage