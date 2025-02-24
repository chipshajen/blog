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
          console.log(data[0]); // Logs "Hello from Vite!"
          setPosts(data)
        })
        .catch((error) => console.error('Error:', error));
    }, []);
  
    return (
      <div>
        <h1>Babe Blog <Link to="/posts/new">Create New Post</Link></h1>
        {posts && posts.map(post => {
          return <PostCard key={post.id} post={post} />
        })}
  
      </div>
    );
}

export default PostList