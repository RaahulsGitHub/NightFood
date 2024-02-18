import React, { useEffect, useState } from 'react'
import { REST_INFO_API } from '../constants';

function useGetSwiggyRestInfo(resId) {
    const [restInfo, setRestInfo] = useState();
    useEffect(()=>{
        getRestData();
    },[])

    const getRestData = async()=>{
        const data = await fetch(REST_INFO_API+resId);
        const json = await data.json();
        setRestInfo(json?.data)
    }
        return restInfo;
}

export default useGetSwiggyRestInfo