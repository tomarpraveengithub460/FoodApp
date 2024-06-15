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
        const data = await fetch(MENU_API + resId);
        // console.log(resId);
        const json = await data.json();

        // console.log(json);

        // console.log(json.data.cards[4]?.groupedCard?.
        //     cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
        // );

        // console.log(json.data.cards[4]?.groupedCard?.
        //     cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name
        // );

        setResInfo(json.data.cards[4]?.groupedCard?.
            cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

    }

    if (resInfo == null) return (<Shimmer />);

    const { name, imageId, defaultPrice } = resInfo[0]?.card?.info;
    // console.log(name, imageId, defaultPrice);
    // console.log(resInfo);


    return (
        <div className="menu">
            <h2>Menu</h2>
            <h2>{name}</h2>
            {resInfo.map((item) => (
                <ul key={item?.card?.info?.id}>
                    <li >
                        {item.card.info.name} - {" Rs. "}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                </ul>
            ))}
        </div>
    )
}
export default RestaurentMenu;   
