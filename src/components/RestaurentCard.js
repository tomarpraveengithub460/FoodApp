import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
    const { resData } = props;
    // console.log("Inside res card and ",resData.info);
    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        costForTwo,
    } = resData?.info;   //Optional Chaining

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src={CDN_URL +
                cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            {/* <h4>{deliveryTime} minutes</h4> */}
            {/* <h4>38 Minutes</h4> */}
        </div>
    )
}

export default RestaurentCard;
