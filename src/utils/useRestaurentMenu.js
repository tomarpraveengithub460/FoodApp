import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurentMenu=(resId)=>{

    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{
        const data=await fetch(MENU_API+resId);
        const json=await data.json();
        console.log("This is JSON : ",json.data);
        // setResInfo(json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        setResInfo(json.data);
    };
    return resInfo;

};
export default useRestaurentMenu;