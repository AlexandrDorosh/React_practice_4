import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPost} from "../../services/Api";
import {useParams} from 'react-router-dom';

export default function Posts(){
    const {id} = useParams();
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPost(id).then(value => setPosts(value.data))
    }, [id])

    return(
        <div>
            {
                posts.map(value => <Post key={value.id} singlePost={value} />)
            }
        </div>
    );
}
