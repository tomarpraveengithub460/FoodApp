import { useState } from "react";
import ItemList from "./ItemList";
const RestaurentCategory = ({ categoryData }) => {
    const dataArray=categoryData?.card?.card?.itemCards;

    const [handle,setHandle]=useState(false);

    const handleClick=()=>{
        setHandle(!handle);
    }
    return (
        <div>
            <div className="flex justify-center">
                <div className="w-10/12 h-70 border-2 p-6 rounded-lg m-6">
                    <div className="flex justify-between">
                        <h1 className="text-xl font-bold">{categoryData?.card?.card?.title} ({categoryData?.card?.card?.itemCards.length})</h1>
                        <h1 onClick={handleClick} style={{cursor:"pointer"}}>⬇️</h1>
                    </div>
                    <div>
                        {handle && <ItemList data={dataArray} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurentCategory;
