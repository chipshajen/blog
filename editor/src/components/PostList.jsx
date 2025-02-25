import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import PostCard from './PostCard'

function PostList() {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
      fetch('http://localhost:3000/posts')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setPosts(data)
        })
        .catch((error) => console.error('Error:', error));
    }, []);
  
    return (
      <div>
        <h1><Link to="/">Back to Home</Link>Babe Blog <Link to="/posts/new">Create New Post</Link></h1>
        {posts && posts.map(post => {
          return <PostCard key={post.id} post={post} />
        })}
  
      </div>
    );
}

export default PostList