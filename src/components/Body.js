// import RestaurentCard from "./RestaurentCard";
// import resList from "../../data";

// const Body = () => {
// return (
//     <div className="body">
//         <div className="filter">
//             <button className="filter-btn" onClick={() => {
//                 <filterRating/>;
//             }}>Top Rated Restaurent</button>
//         </div>
//         <div className="res-container">
//             {
//                 resList.map(restaurent => <RestaurentCard key={restaurent.data.id} resData={restaurent} />)
//             }
//         </div>
//     </div>
// )
// }
// export default Body; 



import RestaurentCard from "./RestaurentCard";
import resList from "../../data";
import { useState } from "react";
const Body = () => {
    const [filteredList,setFilteredList]=useState(resList); //Initialization Line
    function filterRes(){
        let rest=filteredList.filter((res)=>{
            return res.data.avgRating>=4.4;
        });
        setFilteredList(rest);
        console.log(rest);
    }
return (
    <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                filterRes();
            }}>Top Rated Restaurent</button>
        </div>
        <div className="res-container">
            {
                filteredList.map(restaurent => <RestaurentCard key={restaurent.data.id} resData={restaurent} />)
            }
        </div>
    </div>
)
}
export default Body; 