import './User.css';
import {Link, Route} from "react-router-dom";
import Posts from "../posts/Posts";

export default function User({item, userId}){

    return(
        <div className={'user'}>
            {item.name} - <Link to={'/users/' + item.id} onClick={() => {
                userId(item.id)
            }
        } >show posts</Link>

            <Route path={'/users/' + item.id} render={() => <Posts />}/>
        </div>
    )
}
