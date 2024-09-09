const Post = ({post})=> {
    const h4 = post.id +")" +post.title;
    return (
        <div className="post" key={post.id}>
            <h4 data-testid={post.id}>{h4}</h4>
        </div>
    )
}
export default Post;