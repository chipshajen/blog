export default function PostCard({ post }){
    const { title, content } = post
    
    return(
        <>
            <div><h1>{title}</h1></div>
            <p>{content}</p>
        </>
    )
}