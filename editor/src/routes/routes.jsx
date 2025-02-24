import Home from '../components/Home'
import Post from '../components/Post'
import PostList from '../components/PostList'
import PostNew from '../components/PostNew'


const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/posts',
        element: <PostList />
    },
    {
        path: 'posts/new',
        element: <PostNew />
    },
    {
        path: '/posts/:postId',
        element: <Post />
    }
]

export default routes