import { Link } from 'react-router-dom'

export default function PostCard({ post }){
    const { title, content } = post
    
    return(
        <>
        <div className="post-card-container">
        <div>
            <Link to={`/posts/${post.id}`}> <h1>{title}</h1> </Link>
            <p>{content}</p>
        </div>
        </div>
        </>
    )
}