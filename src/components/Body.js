import RestaurentCard from "./RestaurentCard";
import resList from "../../data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurent, setListOfRestaurent] = useState([]);

    //Whenever State variables update, react triggers a recoinciliation cycle(re-renders the component)
    const [searchText, setSearchText] = useState("");

    const [filteredRestaurent, setfilteredRestaurent] = useState([]);

    const { resId } = useParams();
    // console.log(resId);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        let resInfo = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(json);
        // console.log(resInfo);
        // console.log(resInfo);
        setListOfRestaurent(resInfo);
        setfilteredRestaurent(resInfo);
    }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return (
            <h1>Looks like you are offline!! Please chaeck your internet Connection.</h1>
        );


    return listOfRestaurent.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(event) => { setSearchText(event.target.value); }} />
                    <button onClick={() => {
                        const filteredRes = listOfRestaurent.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredRestaurent(filteredRes);
                        // console.log(filteredRes);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    let rest = listOfRestaurent.filter((res) => {
                        return res?.info?.avgRating >= 4.5;
                    });
                    setfilteredRestaurent(rest);
                    // console.log(rest);
                }}>Top Rated Restaurent</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurent.map((restaurent) => <Link to={"/restaurant/" + restaurent?.info?.id} key={restaurent?.info?.id}><RestaurentCard resData={restaurent} /></Link>)
                }
            </div>
        </div>
    )
}
export default Body; 