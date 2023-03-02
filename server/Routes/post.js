import express from 'express';
import { getPosts, createPost } from '../Controller/Post.js';

const router = express.Router();

router.get('/events', getPosts);
router.post('/create', createPost)

export default router;