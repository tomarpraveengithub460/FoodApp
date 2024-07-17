import { useEffect} from "react";

const User = () => {
    useEffect(()=>{
        const interval=setInterval(()=>{
            // console.log("Hello World");
        },1000);
        // console.log("Use Effect");

        //This is how we clear the interval.
        return ()=>{
            clearInterval(interval);
            // console.log("Use Effect Return");
        };
    },[]);

    return (
        <div className="user-card">
            <h1>Hello, How are You ?</h1>
        </div>
    );
};

export default User;
