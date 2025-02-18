import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import PostDetails from "./PostDetails";
import { updatePostStatus } from "../utils/posts";



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

    const handleStatusChange = (e) => {
        const status = e.target.value
        

        updatePostStatus(postId, status)
        .then(() => {
            let message = ""

            setPost((prevState) => ({...prevState, status}))

            switch(status){
                case "Published":
                    message = "Succesfully published the post"
                    break;
                case "Draft":
                    message = "Succesfully put the post into draft"
                    break;
                default:
                    message = "Status Updated to unknown status"
            }

            alert(message)
        })
        .catch(error => console.error(error))
    }

    

    return(
        <>
            <header className="post-header">
                <Link to='/'>Back to Posts</Link>
                <div className="pick-post-status">
                    <label htmlFor="post-status">Set Status: </label>
                    {post && 
                        <select id="post-status" name="post-status" value={post.status} onChange=   {handleStatusChange}>
                            <option value="Published">Published</option>
                            <option value="Draft">Draft</option>
                        </select>
                    }
                </div>   
            </header>
            <div>
                {post && <PostDetails post={post}/>}
            </div>
        </>
    )
}