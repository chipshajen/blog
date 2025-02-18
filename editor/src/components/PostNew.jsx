import { useState } from "react"
import { createPost } from "../utils/posts"
import { Link, Navigate, useNavigate } from "react-router-dom"

function PostNew() {

  const navigate = useNavigate()

  const [postForm, setPostForm] = useState({
          title: '',
          content: '',
          status: "Draft"
      })

  const handleChange = (e) => {
    const {name, value} = e.target

    setPostForm((prevState) => ({
        ...prevState,
        [name]: value
    }));
  }

  const handleSubmit = () => {

    createPost(postForm)
    .then((data) => {
      alert('you made a post')
      navigate(`/posts/${data.id}`)
    })
    .catch((error) => console.error(error))
  }


  return (
    <div className="post-form">
      <Link to="/"><h3>Back to Posts</h3></Link>
      <h1>Create New Post</h1>
      <h2>Title</h2>
      <input type="text" name="title" id="title" value={postForm.title} onChange={handleChange}/>
      <h2>Content</h2>
      <textarea name="content" id="content" value={postForm.content} onChange={handleChange}></textarea>
      <button type="submit" onClick={handleSubmit}>Create Post</button>
    </div>
  )
}

export default PostNew