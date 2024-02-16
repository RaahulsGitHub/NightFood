import { useEffect } from "react";
import { PUBLIC_API_URL } from "../constants";
import { useDispatch } from "react-redux";
import { addCategory } from "../Redux/categorySlice";
import { addRestaurants } from "../Redux/restaurantListSlice";


const getSwiggyData = ()=>{
    const dispatch = useDispatch();
    
    useEffect(()=>{
        getData();
    },[])
    
    const getData = async ()=>{
        const data = await fetch(PUBLIC_API_URL);
        const json = await data.json();
        // console.log(json?.data);
        dispatch(addRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
        dispatch(addCategory(json?.data?.cards[0]?.card?.card?.imageGridCards?.info))
    }
    
}
export default getSwiggyData;