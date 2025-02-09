import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import PostDetails from "./PostDetails";



export default function Post(){

    const [post, setPost] = useState(null)
    const { postId } = useParams();


    useEffect(() => {
        fetch(`http://localhost:3000/posts/${postId}`)
            .then((response) => {
                if(!response.ok){
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then((data) => {
                console.log(data)
                setPost(data)
            })
            .catch((error) => console.error("Error:", error))
    }, [])

    

    return(
        <>
            <Link to='/'>Back to Posts</Link>
            <div>
                {post && <PostDetails post={post}/>}
            </div>
        </>
    )
}