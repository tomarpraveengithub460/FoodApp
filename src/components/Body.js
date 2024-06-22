import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import resList from "../../data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurentMenu from "./RestaurentMenu";

const Body = () => {
    const [listOfRestaurent, setListOfRestaurent] = useState([]);

    //Whenever State variables update, react triggers a recoinciliation cycle(re-renders the component)
    const [searchText, setSearchText] = useState("");

    const [filteredRestaurent, setfilteredRestaurent] = useState([]);

    const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);

    console.log(listOfRestaurent);

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
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(event) => { setSearchText(event.target.value); }} />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        const filteredRes = listOfRestaurent.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredRestaurent(filteredRes);
                        // console.log(filteredRes);
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        let rest = listOfRestaurent.filter((res) => {
                            return res?.info?.avgRating >= 4.5;
                        });
                        setfilteredRestaurent(rest);
                        // console.log(rest);
                    }}>Top Rated Restaurent</button>
                </div>

            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurent.map((restaurent) => <Link to={"/restaurant/" + restaurent?.info?.id} key={restaurent?.info?.id}>{(restaurent?.info?.avgRating
>=4.5)?<RestaurentCardPromoted resData={restaurent} />:<RestaurentCard resData={restaurent} />}</Link>)
                }
            </div>
        </div>
    )
}
export default Body; 