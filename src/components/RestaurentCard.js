import { CDN_URL } from "../utils/constants";
const RestaurentCard = (props) => {
    const { resData } = props;
    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info;  

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL +
                cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
        </div>
    )
}

export const withPromotedLabel=(RestaurentCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurentCard {...props}/>
            </div>
        )
    }
}
export default RestaurentCard;
