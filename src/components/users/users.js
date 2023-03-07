import React, {useState} from "react";
import AddUser from "./addUser";
import UserList from "./userList";

const Users = (props) => {
    const [users, setUsers] = useState([])

    const onAddUserHandler = (username, age) => {
        setUsers((prevUsers) => {
            return [
                ...prevUsers,
                {
                    id: Math.random().toString(),
                    name: username,
                    age: age
                }
            ]
        })
        props.loggedIn(true)
    }

    return (
        <div>
            <AddUser onAddUser={onAddUserHandler}></AddUser>
            <UserList users={users}></UserList>
        </div>
    )
}

export default Users