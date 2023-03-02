import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postRoutes from './Routes/post.js'
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

dotenv.config()

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.DATABASE_ACCESS,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => console.log('Database Connected'))

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || "something went wrong"
    return res.status(status).json({
        success: false,
        status,
        message
    })
})

app.use(
    cors({
      methods: ["GET", "POST"],
      credentials: true,
    })
  );

app.use('/api', postRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))