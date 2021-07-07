import './Users.css';
import { useEffect, useState } from "react";
import { getUsers } from "../../services/Api";
import User from "../user/User";
import Posts from "../posts/Posts";
import { Route } from "react-router-dom";

export default function Users(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    },[]);

    return(
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
            <Route path={'/users/:id/posts'} component={Posts}/>
        </div>
    )
}