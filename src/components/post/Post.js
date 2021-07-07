export default function Post({singlePost}){
    return(
        <div>
            <h3>Post: {singlePost.id}</h3>
            <p><strong>Title: </strong>{singlePost.title}</p>
            <p><strong>Body: </strong>{singlePost.body}</p>
        </div>
    )
}