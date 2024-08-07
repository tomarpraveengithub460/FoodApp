import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Contact = () => {
    const { loggedInUser, setUserName } = useContext(UserContext);
    // console.log("Logged value is : ", loggedInUser);
    return (
        <div className="w-auto h-auto p-10 text-center bg-gray-100 ml-20 mr-20 mt-10 mb-10 rounded-xl">
            <h1>Contact us Page</h1>
            <p>This is the contact us page</p>
            <div className="filter flex justify-center">
            <div className="search m-4 p-4">
                <p>Give Your Feedback : </p>
                <form>
                    <input type="text" className="border border-black p-2 m-2" placeholder="name"></input>
                    <input type="text" className="border border-black p-2 m-2" placeholder="message"></input>
                    <button className="border border-black p-2 m-2">Submit</button>
                </form>
                    <br></br>
                    <label>Change User : </label>
                    <input type="text" className=" w-72 h-12 p-2 border border-solid border-black rounded-xl" onChange={(event => { setUserName(event.target.value) })} />
                </div>
            </div>
        </div>
    )
}
export default Contact;