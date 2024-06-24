import { useState } from "react";
import ItemList from "./ItemList";
const RestaurentCategory = ({ categoryData,showItems,setShowCategory }) => {
    const dataArray=categoryData?.card?.card?.itemCards;
    // const [handle,setHandle]=useState(false);
    const handleClick=()=>{
        setShowCategory();
    }
    return (
        <div>
            <div className="flex justify-center">
                <div className="w-9/12 border-2 p-4 rounded-2xl m-2">
                    <div className="flex justify-between hover:cursor-pointer" onClick={handleClick}>
                        <h1 className="text-xl font-bold">{categoryData?.card?.card?.title} ({categoryData?.card?.card?.itemCards.length})</h1>
                        <h1 style={{cursor:"pointer"}}>⬇️</h1>
                    </div>
                    <div>
                        {showItems && <ItemList data={dataArray} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RestaurentCategory;
