import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    id: Number,
    date: String,
    text: String,
    author: {
        name: String,
        nickname: String,
        avatarUrl: String
    },
    media: Boolean,
    likes: Boolean,
}, {
    versionKey: false
})

export const Posts = mongoose.model('Posts', PostSchema);