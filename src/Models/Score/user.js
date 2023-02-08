import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    score: {
        required: true,
        type: String,
    },
})

export default mongoose.model("User", userSchema);