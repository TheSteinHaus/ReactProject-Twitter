import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AuthSchema = new Schema({
    email: String,
    name: String,
    nickname: String,
    password: String
}, {
    versionKey: false
})

export const Auth = mongoose.model('users', AuthSchema);