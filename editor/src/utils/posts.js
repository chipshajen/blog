const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const createPost = (postForm) => {
    return fetch(`${API_BASE_URL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postForm)
    })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
        console.error("Error:", error);
        throw error; // Re-throw the error to allow `handleUpdate` to handle it
    });
}

const updatePost = (postId, postForm) => {
        return fetch(`${API_BASE_URL}/posts/${postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postForm)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => {
            console.error("Error:", error);
            throw error; // Re-throw the error to allow `handleUpdate` to handle it
        });
}

const updatePostStatus = (postId, status) => {
    return fetch(`${API_BASE_URL}/posts/${postId}/status`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            status: status
        })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
        console.error(error);
        throw error
    }) 
}


export { updatePost, updatePostStatus, createPost }