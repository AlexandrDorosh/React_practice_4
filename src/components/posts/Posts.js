import Post from "../post/Post";

export default function Posts({postsList}){
    return(
        <div>
            {
                postsList.map(value => <Post key={value.id} singlePost={value} />)
            }
        </div>
    );
}