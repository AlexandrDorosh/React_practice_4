import './User.css';
import { Link } from "react-router-dom";

export default function User({item}){

    return(
        <div className={'user'}>
            {item.name} -
            <Link to={`/users/${item.id}/posts`}>show posts</Link>

        </div>
    )
}