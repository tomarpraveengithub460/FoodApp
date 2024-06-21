// import User from "./User";
// import UserClass from "./UserClass";
// const About=()=>{
//     return(
//         <div>
//             <h1>About us</h1>
//             <h2>This is the food ordering App</h2>
//             <User name="Akshay Saini" price={200}/>
//             <UserClass name="Akshay Saini" price={200}/>
//         </div>
//     )
// }
// export default About;





//Now we are converting the functional Component into the Class Component
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";   

class About extends Component {
    constructor(props) {
        super(props);
        // console.log("Parent Constructor");
    }

    //ComponentDidMount is used  to make an API Call usually beacuse
    //it is called after the component is rendered
    // If there is a delay in making API Call then component rendeering 
    // does not stop due to the delay.

    componentDidMount() {
        // console.log("Parent ComponentDidMount");
    }

    render() {
        // console.log("Parent Render");
        return (
            <div>
                <h1>About us</h1>
                <h2>This is the food ordering App</h2>
                {/* <User name="Akshay Saini" price={200} /> */}
                <UserClass name="Akshay Saini" price={200} />
                {/* <UserClass name="Karan" price={100} /> */}
            </div>
        )
    }
}
export default About;