import { useState } from "react";

const User = (props) => {
    const {name,price}=props;

    const [count,setCount]=useState(0);

    function inCount(){
        setCount(()=>{
            return count+1;
        })
    }

    return (
        <div className="user-card">
            <h2>Name : {name} - {price/2}</h2>
            <h3>Location : Dehradhun</h3>
            <h4>Contact : @akshaymarch7</h4>
            <h5>Count is : {count}</h5>
            <button onClick={inCount}>Increase</button>
        </div>
    );
};
export default User;
