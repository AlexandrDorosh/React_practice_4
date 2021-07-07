import { Link } from "react-router-dom";

export default function Button(){
    return(
        <div>
            <Link to={'/users'}>Users</Link>
        </div>
    )
}