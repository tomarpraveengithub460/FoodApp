import RestaurentCard from "./RestaurentCard";
import resList from "../../data";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map(restaurent => <RestaurentCard key={restaurent.data.id} resData={restaurent} /> )
                    //never use index as the key
                }
            </div>
        </div>
    )
}
export default Body; 
