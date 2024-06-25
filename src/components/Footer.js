import React from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
const Footer=()=>{
    const onlineStatus = useOnlineStatus();
    return (
        <div className="h-24 w-auto bg-gray-200 pt-10 pb-4 rounded-t-xl mt-10">
            <h1 className="text-center text-lg">Food pvt. ltd © 2024</h1>
            <h2 className="text-center font-bold">Network Status : {onlineStatus?"🟢":"🔴"} </h2>
        </div>
    )
}

export default Footer;