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
    }

    const logOutHandler = () => {
        props.loggedIn(false)
    }

    return (
        <div>
            <AddUser onAddUser={onAddUserHandler}></AddUser>
            <UserList users={users} loggedIn={props.loggedIn}></UserList>
            {users.length > 0 && <button onClick={logOutHandler}>Log out</button>}
        </div>
    )
}

export default Users