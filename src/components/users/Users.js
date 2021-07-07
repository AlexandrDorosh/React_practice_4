import './Users.css';
import {useEffect, useState} from "react";
import {getUsers} from "../../services/Api";
import User from "../user/User";

export default function Users(){
    const [users, setUsers] = useState([]);

    const [user, setUser] = useState({});

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]))
    },[]);

    const userId = (id) => {
        const chosenUser = users.find(value => value.id === id)
        setUser({...chosenUser})
    };


    return(
        <div>
            <h2>{user.username}</h2>
            {
                users.map(value => (
                    <User key={value.id} item={value} userId={userId}/>
                ))
            }

        </div>
    )
}