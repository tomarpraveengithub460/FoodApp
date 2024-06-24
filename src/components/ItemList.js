import { CDN_URL } from "../utils/constants";

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const ItemList = ({ data }) => {
    let array = data;
    console.log(array);


    const dispatch=useDispatch();
    const handleAddItems=(element)=>{
        //Dispatch an action
        dispatch(addItem(element));  //Item passed inside the addItem is passed to the action.payload
    }

    return (
        <div >
            {array.map((element) => (
                <div className="flex justify-between relative border-b-2 p-4 w-12/12 rounded-2xl" key={element?.card?.info?.id}>
                    <div>
                        {element?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? "🟩" : "🟥"}
                        <h1 className="font-bold">{element?.card?.info?.name}</h1>
                        {element?.card?.info?.ratings?.aggregatedRating?.rating ? <h2>⭐️ {element?.card?.info?.ratings?.aggregatedRating?.rating} ({element?.card?.info?.ratings?.aggregatedRating?.ratingCount})</h2> : <h2>🔺 No Ratings</h2>}

                        <h1 className="font-bold">₹{element?.card?.info?.price / 100 || element?.card?.info?.defaultPrice
                            / 100}</h1>
                        <p className="text-xs mr-4 justify-center">{element?.card?.info?.description}</p>
                    </div>

                    <img src={CDN_URL + element?.card?.info?.imageId} className="w-2/12 rounded-2xl"></img>
                    <button className="absolute right-9 bottom-0 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 my-2 rounded"
                    onClick={()=>handleAddItems(element)}
                    >Add to Cart</button>
                </div>
            ))}
        </div>
    )
}
export default ItemList;
