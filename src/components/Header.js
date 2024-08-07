import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

import { useSelector } from "react-redux";


const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const data = useContext(UserContext);
    // console.log(data);
    
    //Subscribibg to the store using the selector
    const cartItems=useSelector((store)=>store.cart.items);
    // console.log(cartItems);

    return (
        <div className="flex justify-between shadow-xl bg-white rounded-b-xl sticky top-0 z-50 pl-20 pr-20">
            <div className="logo-container>">
                <img className="w-40 h-30 rounded-full bg-cover" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4 font-bold">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">🛒({cartItems.length})</Link></li>

                    <button className="login font-bold" onClick={() => { btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }}>{btnNameReact}</button>
                    &nbsp; &nbsp; &nbsp;  &nbsp; 
                    <li className="font-bold">{data?.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
