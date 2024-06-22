import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { CDN_URL } from "../utils/constants";

const RestaurentMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurentMenu(resId);

    console.log("This is  ", resInfo);


    if (resInfo == null) return (<Shimmer />);

    const { name,
        cloudinaryImageId
        , costForTwoMessage, cuisines, avgRating, totalRatingsString, feeDetails
    } = resInfo?.cards[2]?.card?.card?.info;

    // return (
    //     <div className="menu">
    //         <h2>Menu</h2>
    //         <h2>{name}</h2>
    //         {resInfo.map((item) => (
    //             <ul key={item?.card?.info?.id}>
    //                 <li >
    //                     {item.card.info.name} - {" Rs. "}
    //                     {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
    //                 </li>
    //             </ul>
    //         ))}
    //     </div>
    // )

    return (
        <div>
            <img src={CDN_URL + cloudinaryImageId} className="w-56"></img>
            <h1 className="font-bold mt-2 text">{name}</h1>
            <h2>{costForTwoMessage}</h2>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{avgRating} ⭐️ ({totalRatingsString})</h2>
            {/* <h3>{feeDetails.message.slice(feeDetails.message.indexOf("|")+2,feeDetails.message.length+2)}</h3> */}
        </div>
    )
}
export default RestaurentMenu;   
