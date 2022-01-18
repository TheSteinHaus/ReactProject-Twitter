import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ActualsSchema = new Schema ({
    theme: String,
    title: String,
    tweets: Number,
    comments: Number,
})

export const Actuals = mongoose.model('Actuals', ActualsSchema);