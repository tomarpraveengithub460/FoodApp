const fetchData=async () =>{
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json= await data.json();
    // console.log(json);
    // setListOfRestaurent(json?.data?.cards[2]?.data?.data?.cards);
    // console.log(json?.data);
    // console.log(json?.data?.cards[0]);
    // console.log(json?.data?.cards[1]);
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}


export {fetchData};
