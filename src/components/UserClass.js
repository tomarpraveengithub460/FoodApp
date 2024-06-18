import React from "react"
//React.Component is given to us by "react"
class UserClass extends React.Component {
    constructor(props){     
        super(props);
        // console.log(props.name);
        // console.log(props.price);
        this.state={
            count:0,
            count1:0
        }
        console.log("Child Constructor");
    }

    componentDidMount(){
        console.log("Child Did Mount");
    }

    render() {
        //You can destructure it.
        const {name,price}=this.props;
        console.log("Child Render");
        return (
            <div className="user-card">
                <h2>Name : {this.props.name} - {this.props.price}</h2>
                <h3>The name of mentor is : {name}</h3>
                <h4>The price of teaching is : {price}</h4>
                <h3>Location : Dehradhun</h3>
                <h4>Contact : @akshaymarch7</h4>
                <hr></hr>
                <h1>Count is : {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Increase Count</button>
            </div>
        )
    }
}

export default UserClass; 