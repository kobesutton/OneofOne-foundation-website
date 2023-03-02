import Post from '../Model/Post.js'
import { createError } from '../error.js'

export const getPosts = async (req, res, next) => {
    
    try {
        const post = await Post.find()
        if(!post) return next(createError('No Posts Found'))
        res.status(200).json(post)  
    } catch (error) {
        next(error)
    }
}

export const createPost = async (req, res, next) => {
    const body = req.body
    try {
        const post = new Post({ ...body })
        if(!post) return next(createError('Cannot create Post'))
        await post.save()
        return res.status(200).json(post) 
    } catch (error) {
        next(error)
    }
}
