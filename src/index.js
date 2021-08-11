import React from "react";
import ReactDOM from "react-dom"

const UserProfileDetails = {
    userImage: "https://www.netlify.com/v3/img/build/dba5652e-164.webp",
    userName: "Adam Lee",
    userTitle: "Director"
}

const UserProfile = () => {
    return (
        <div>
            <UserProfilePicture image={UserProfileDetails.userImage}/>
            <UserProfileName name={UserProfileDetails.userName}/>
            <UserProfileTitle title={UserProfileDetails.userTitle}/>
        </div>
    )
}

const UserProfilePicture = (props) => <img src={props.image}
                                           alt={props.name}/>
const UserProfileName = (props) => <h1>{props.name}</h1>

const UserProfileTitle = (props) => <h1>{props.title}</h1>

ReactDOM.render(<UserProfile/>, document.getElementById("root"));

