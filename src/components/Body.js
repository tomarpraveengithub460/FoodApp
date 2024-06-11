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
import { useEffect, useState } from "react";
const Body = () => {
    const [listOfRestaurent,setListOfRestaurent]=useState(resList); //Initialization Line

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json= await data.json();
        console.log(json);
        // setListOfRestaurent(json?.data?.cards[2]?.data?.data?.cards);
    }


    function filterRes(){
        let rest=listOfRestaurent.filter((res)=>{
            return res.data.avgRating>=4.4;
        });
        setListOfRestaurent(rest);
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
                listOfRestaurent.map(restaurent => <RestaurentCard key={restaurent.data.id} resData={restaurent} />)
            }
        </div>
    </div>
)
}
export default Body; 