import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
// import resList from "../../data";
import { useEffect, useState ,useContext} from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Footer from "./Footer";

const Body = () => {
    const [listOfRestaurent, setListOfRestaurent] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurent, setfilteredRestaurent] = useState([]);
    const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);
    // const { resId } = useParams();


    const {loggedInUser , setUserName}=useContext(UserContext);
    console.log("Logged value is : ",loggedInUser);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        let resInfo = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurent(resInfo);
        setfilteredRestaurent(resInfo);
    }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return (
            <div>
                <h1 className="text-center text-lg font-bold pt-20">Looks like you are offline!! Please check your internet Connection.</h1>
                <Shimmer/>
            </div>
        );


    return listOfRestaurent.length === 0 ? <Shimmer /> : (
       <div>
         <div className="body">
            <div className="filter flex justify-between">
                <div className="search m-4 pl-2">
                    <input type="text" className="ml-20 w-72 h-12 p-2 border border-solid border-black rounded-xl" value={searchText} onChange={(event) => { setSearchText(event.target.value); }} />
                    <button className="px-4 py-2 w-40 h-12 bg-green-600 hover:bg-green-800 text-white m-4 rounded-lg" onClick={() => {
                        const filteredRes = listOfRestaurent.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredRestaurent(filteredRes);
                    }}>Search</button>
                </div>
                <div className="search mr-20 p-4 flex items-center">
                    <button className="px-4 py-2 bg-orange-400 rounded-lg text-white hover:bg-orange-600" onClick={() => {
                        let rest = listOfRestaurent.filter((res) => {
                            return res?.info?.avgRating >= 4.5;
                        });
                        setfilteredRestaurent(rest);
                    }}>Top Rated Restaurent</button>
                </div>

                {/* <div className="filter flex items-center">
                <div className="search m-4 p-4">
                    <input type="text" className=" w-72 h-12 p-2 border border-solid border-black rounded-xl" onChange={(event=>{setUserName(event.target.value)})} />
                </div>
                </div> */}
            </div>
            <div className="flex flex-wrap justify-center">
                {
                    filteredRestaurent.map((restaurent) => <Link to={"/restaurant/" + restaurent?.info?.id} key={restaurent?.info?.id}>{(restaurent?.info?.avgRating
                        >= 4.5) ? <RestaurentCardPromoted resData={restaurent} /> : <RestaurentCard resData={restaurent} />}</Link>)
                }
            </div>
        </div>
        <Footer/>
       </div>
    )
}
export default Body; 