import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: "Title is required",
    },
    description: {
      type: String,
      trim: true,
    },
    dueDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ['todo', 'in-progress', 'done'],
      default: 'todo'
    },
  },
  { timestamps: true }
);

export default mongoose.model("Task", TaskSchema);
