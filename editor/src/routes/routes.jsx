import App from '../App'
import Post from '../components/Post'
import PostNew from '../components/PostCard'

const routes = [
    {
        path: '/',
        element: <App />,
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