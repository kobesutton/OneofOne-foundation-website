import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    img: {type: String, required: true},
    title: {type: String, required: true},
    desc: {type: String, required: true},
    date: {type: String, default: Date},
}, {
    timestamps: true
})

export default mongoose.model("Post", PostSchema);