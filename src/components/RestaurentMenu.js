import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + 229);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data.items);

    }

    if (resInfo == null) return (<Shimmer />);

    const { name, cuisines, cloudinaryImageId, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    const { itemsCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;
    console.log(itemscard);

    return (
        <div className="menu">
            <h1>{name}</h1>
            {console.log(name)}
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            {itemsCards.map((item) => (
                <ul>
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {" Rs. "}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                </ul>
            ))}
        </div>
    )
}
export default RestaurentMenu;   
