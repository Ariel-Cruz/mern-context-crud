//Creacion de estados para que se pueda utilizar global
import { useState, createContext, useContext, useEffect } from 'react';
import { getPostsRequests, createPostRequests, deletePostRequests, getPostRequest, updatePostRequest } from '../api/posts';

const postContext = createContext()

export const usePosts = () => {
    const context = useContext(postContext)
    return context
}

export const PostProvider = ({children}) => {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const res= await getPostsRequests()
        setPosts(res.data)
    }

    const createPost = async (post) => {
        try {
            const res = await createPostRequests(post)
            setPosts([...posts, res.data])
            console.log(res)
        }catch (error) {
            console.log(error)
        }
    }

    const deletePost = async (id) => {
        const res = await deletePostRequests(id);
        if (res.status === 204){
            setPosts(posts.filter((post) => post._id !== id))
        }
        
    }
    const getPost = async (id) => {
        const res = await getPostRequest(id)
        return res.data
        
    }
    const updatePost = async (id, post) => {
        const res = await updatePostRequest(id, post)
        setPosts(posts.map((post) => post._id === id ? res.data : post))
        console.log(res)
    }


    useEffect(() => {
        getPosts()
    }, [])


    return (
        <postContext.Provider value={{posts, getPosts, createPost, deletePost, getPost, updatePost}}>
            {children}
        </postContext.Provider>
    )

    
}
