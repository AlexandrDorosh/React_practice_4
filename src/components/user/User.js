import './User.css';
import {Link, Route} from "react-router-dom";
import Posts from "../posts/Posts";
import {useState} from "react";
import {getPost} from "../../services/Api";

export default function User({item, userId}){
    const [posts, setPosts] = useState([])

    const getPosts = () => {
        getPost(item.id).then(value => {
            setPosts([...value.data])
        })
    }

    return(
        <div className={'user'}>
            {item.name} - <Link to={'/users/' + item.id} onClick={() => {
                userId(item.id)
                getPosts()
            }
        } >show posts</Link>

            <Route path={'/users/' + item.id} render={() => <Posts item={item} postsList={posts} />}/>
        </div>
    )
}
