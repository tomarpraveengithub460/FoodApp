import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { CDN_URL } from "../utils/constants";
import RestaurentCategory from "./RestaurentCategory";

const RestaurentMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurentMenu(resId);
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("This is Category : ",categories);

    if (resInfo == null) return (<Shimmer />);

    const { name,
        cloudinaryImageId
        , costForTwoMessage, cuisines, avgRating, totalRatingsString, feeDetails
    } = resInfo?.cards[2]?.card?.card?.info;

    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="flex justify-between self-center w-10/12 h-70 border-2 p-6 rounded-lg m-6 align-middle">
                    <div className="flex flex-col items-start space-y-4">
                        <h1 className="text-4xl font-bold pb-4">{name}</h1>
                        <h2 className="font-bold">⭐️ {avgRating}  ({totalRatingsString}) • {costForTwoMessage}</h2>
                        <h2 className="font-bold text-orange-500">🍴 {cuisines.join(", ")}</h2>
                        <h3 className="font-bold">🚚 {feeDetails.message.slice(feeDetails.message.indexOf("|") + 2, feeDetails.message.length + 2)}</h3>
                        <button className="h-12 w-28 bg-green-600 rounded-3xl text-white font-bold mt-10">Order</button>
                    </div>
                    <img src={CDN_URL + cloudinaryImageId} className="w-60 rounded-2xl aspect-square"></img>
                </div>
            </div>
            {categories.map((category)=><RestaurentCategory key={category?.card?.card?.title} categoryData={category} />)}
        </div>
    )
}
export default RestaurentMenu;
