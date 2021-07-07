import {Link, Route} from "react-router-dom";
import Users from "../users/Users";

export default function Button(){
    return(
        <div>
            <Link to={'/users'}>Users</Link>
            <Route path={'/users'} component={Users} />
        </div>
    )
}