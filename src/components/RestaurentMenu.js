import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
    const { resId } = useParams();
    const resInfo=useRestaurentMenu(resId);
    if (resInfo == null) return (<Shimmer />);

    const { name, imageId, defaultPrice } = resInfo[0]?.card?.info;

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
