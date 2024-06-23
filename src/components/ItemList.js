import { CDN_URL } from "../utils/constants";
const ItemList = ({ data }) => {
    let array = data;
    console.log(array);
    return (
        <div >
            {array.map((element) => (
                <div className="flex justify-between border-b-2 p-8 w-12/12" key={element?.card?.info?.id}>
                    <div>
                        {element?.card?.info?.itemAttribute?.vegClassifier==="VEG"?"🟩":"🟥"}
                        <h1 className="font-bold">{element?.card?.info?.name}</h1>
                        {element?.card?.info?.ratings?.aggregatedRating?.rating?<h2>⭐️ {element?.card?.info?.ratings?.aggregatedRating?.rating} ({element?.card?.info?.ratings?.aggregatedRating?.ratingCount})</h2>:<h2>🔺 No Ratings</h2>}

                        <h1 className="font-bold">₹{element?.card?.info?.price / 100 || element?.card?.info?.defaultPrice
                            / 100}</h1>
                        <p className="pr-8">{element?.card?.info?.description}</p>
                    </div>
                    <img src={CDN_URL + element?.card?.info?.imageId} className="w-2/12 rounded-2xl"></img>
                </div>
            ))}
        </div>
    )
}
export default ItemList;