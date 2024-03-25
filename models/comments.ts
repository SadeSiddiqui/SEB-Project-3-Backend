import mongoose, { Schema } from "mongoose";

interface IComment {
  user: mongoose.Schema.Types.ObjectId;
  animalId: mongoose.Schema.Types.ObjectId;
  title: string;
  post: string;
  date: string;
  time: string;
}

const commentSchema: Schema<IComment> = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  animalId: {type: mongoose.Schema.Types.ObjectId, ref: "Animal", required: true },
  title: { type: String, required: true },
  post: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

export default mongoose.model<IComment>("Comment", commentSchema);

// Date and time to be reassessed at a later date
