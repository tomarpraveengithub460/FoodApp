import React from "react"
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log("Child Constructor");
    }
    componentDidMount(){
        this.timer=setInterval(()=>{
            console.log("This is Hello World");
        },1000);
        console.log("Child Did Mount");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Child Will Unmount");
    }

    render() {
        return (
            <div className="user-card">
                <h1>Hello, How are you ?</h1>
            </div>
        )
    }
}
export default UserClass;