import Post from "../models/Post.js"
import { uploadImage } from "../libs/cloudinary.js"
import fs from "fs-extra"
import { deleteImage } from "../libs/cloudinary.js"

export const getPosts = async (req, res) => {
    try{
        const posts = await Post.find()
        res.send(posts)
    }catch(error){
        console.log(error.message)
        return res.status(500).json({message: error.message})
    }
}
export const createPost = async(req, res) => {
    try{
        const {title, description} = req.body
        let image;

        if(req.files?.image){
            const result = await uploadImage(req.files.image.tempFilePath)

            await fs.remove(req.files.image.tempFilePath)

            console.log(result)
            image = {
                url: result.secure_url,
                public_id: result.public_id,
            }
            
        }

        const newPost =new Post({title, description, image})
        await newPost.save()
        return res.json(newPost)
    }catch(error){
        console.log(error.message)
        return res.status(500).json({message: error.message})
    }
}

export const updatePost = async (req, res) => {
    try{
        const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(updatePost)
        return  res.send(updatePost)
    }catch(error){
        console.log(error.message)
        return res.status(500).json({message: error.message})
    }
}


export const deletePost = async(req, res) => {
    try{
        const postRemoved = await Post.findByIdAndDelete(req.params.id)
        if (!postRemoved) return res.sendStatus(404)

        if(postRemoved.image.public_id){
            await deleteImage(postRemoved.image.public_id)
        }        await deleteImage(postRemoved.image.public_id)

        return res.sendStatus(204)
    }catch(error){
        console.log(error.message)
        return res.status(500).json({message: error.message})
    }
}
export const getPost = async(req, res) => {
    try{
        const post = await Post.findById(req.params.id)
        if(!post) return res.sendStatus(404)
        return res.json(post)
    }catch(error){
        console.log(error.message)
        return res.status(500).json({message: error.message})
    }

}