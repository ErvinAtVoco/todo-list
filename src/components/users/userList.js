import React from "react";
import Card from "../UI/Card";

const UserList = (props) => {
    const loginHandler = () => {
        props.loggedIn(true)
    }

    return (
        <Card>
           <ul>
               {props.users.map((user) => (
                   <li key={user.id}>{user.name} - {user.age} years old <button onClick={loginHandler}>Select</button></li>
               ))}
           </ul>
        </Card>
    )
}

export default UserList