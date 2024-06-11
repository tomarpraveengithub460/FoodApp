import RestaurentCard from "./RestaurentCard";
import resList from "../../data";
import { useEffect, useState } from "react";
import { fetchData, filterRes } from "../controllers";

const Body = () => {
    const [listOfRestaurent, setListOfRestaurent] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData=async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json= await data.json();
        let resInfo=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        console.log(json);
        setListOfRestaurent(resInfo);
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    // let rest = listOfRestaurent.filter((res) => {
                    //     return res.data.avgRating >= 4.4;
                    // });
                    // setListOfRestaurent(rest);
                    // console.log(rest);
                }}>Top Rated Restaurent</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurent.map((restaurent) => <RestaurentCard key={restaurent?.info?.id} resData={restaurent} />)
                }
            </div>
        </div>
    )
}
export default Body; 