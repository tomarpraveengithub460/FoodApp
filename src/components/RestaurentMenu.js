import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { CDN_URL } from "../utils/constants";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";
import MenuShimmer from "./MenuShimmer";

const RestaurentMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurentMenu(resId);
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log("This is Category : ",categories);

    const [showCategory, setShowCategory] = useState(null);

    if (resInfo == null) return (<MenuShimmer />);

    const { name,
        cloudinaryImageId
        , costForTwoMessage, cuisines, avgRating, totalRatingsString, feeDetails
    } = resInfo?.cards[2]?.card?.card?.info;

    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="flex justify-between self-center w-10/12 h-60 border-2 p-4 rounded-3xl mr-20 ml-20 m-8 align-middle ">
                    <div className="flex flex-col items-start space-y-2">
                        <h1 className="text-2xl font-bold pb-4">{name}</h1>
                        <h2 className="font-bold">⭐️ {avgRating}  ({totalRatingsString}) • {costForTwoMessage}</h2>
                        <h2 className="font-bold text-orange-500">🍴 {cuisines.join(", ")}</h2>
                        <h3 className="font-bold">🚚 {feeDetails?.message?.slice(feeDetails?.message.indexOf("|") + 2, feeDetails?.message?.length + 2)}</h3>
                        <button className="h-12 w-28 bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 my-2 rounded font-bold">Order</button>
                    </div>
                    <img src={CDN_URL + cloudinaryImageId} className="w-60 rounded-2xl aspect-square"></img>
                </div>
            </div>
            <h2 className="text-4xl font-bold text-center">Menu</h2>
            {categories.map((category, index) => <RestaurentCategory key={category?.card?.card?.title} categoryData={category} showItems={index == showCategory ? true : false} setShowCategory={()=>setShowCategory(index)} />)}
        </div>
    )
}
export default RestaurentMenu;
