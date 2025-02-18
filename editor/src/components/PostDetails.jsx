import React, { useState } from 'react'
import Button from "./Button"
import { useParams } from 'react-router-dom'
import { updatePost } from '../utils/posts'

export default function PostDetails({post}) {
  
    const { postId } = useParams()

    const [postForm, setPostForm] = useState({
        title: post.title,
        content: post.content,
        status: post.status
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setPostForm((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleUpdate = () => {
        updatePost(postId, postForm)
        .then(() => {
            alert('succesfully updated post')
        })
        .catch((error) => {
            alert('Error Updating Post')
        })
      };

    

  return (
    <div className="post-details">
        <h1>Title</h1>
        <input 
            type="text" 
            name="title" 
            id="title" 
            value={postForm.title} 
            onChange={handleChange}
        />
        <h1>Content</h1>
        <textarea 
            className="post-textarea" 
            name="content" 
            id="content" 
            value={postForm.content} 
            onChange={handleChange}>
        </textarea>
        <div className="post-update-button">
        <Button onClick={handleUpdate} text="Update Post"/>
        </div>
    </div>
  )
}
