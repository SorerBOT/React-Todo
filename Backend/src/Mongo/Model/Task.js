import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export const Task = mongoose.model("Task", taskSchema);