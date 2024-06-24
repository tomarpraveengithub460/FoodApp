import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const data = useContext(UserContext);
    console.log(data);

    return (
        <div className="flex justify-between shadow-xl bg-white rounded-b-xl sticky top-0 z-50">
            <div className="logo-container>">
                <img className="w-40 h-30 rounded-full bg-cover" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status : {onlineStatus ? "🟢" : "🔴"}
                    </li>

                    <li className="px-4">
                        <Link to="/">🏠 Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={() => { btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login") }}>{btnNameReact}</button>
                    &nbsp; &nbsp; &nbsp;  &nbsp; 
                    <li>{data?.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
