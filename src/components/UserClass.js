import React from "react"
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCS3uMVc54NYJHXFUSIUFZrI3Zp00EZ6KcA&s"

            },
        };
        console.log(this.props.name + " Child Constructor");
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        })
        console.log("Child Did Mount");
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    //componentWillUnmount will be called when page will be changed
    componentWillUnmount() {
        console.log("Component Will Unmount");
    }
    render() {
        console.log(this.props.name + " Child Render");
        const { name, location, avatar_url } = this.state.userInfo
        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>{this.state.userInfo.name}</h2>
                <h3>{this.state.userInfo.location}</h3>
            </div>
        )
    }
}


export default UserClass;