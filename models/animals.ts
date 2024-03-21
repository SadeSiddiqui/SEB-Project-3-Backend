import mongoose, { Schema } from "mongoose";
import uniqueValidator = require("mongoose-unique-validator");
// Interface for animal

interface IAnimal {
  name: string;
  species: string;
  image: string;
  type: string;
  topTip: string;
  dietary: string;
  continent: string;
  funFact: string;
  conservation: string;
  user: mongoose.Schema.Types.ObjectId;
}

// Schema for animal

const animalSchema: Schema<IAnimal> = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  species: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
  topTip: { type: String, required: true },
  dietary: { type: String, required: true },
  continent: { type: String, required: true },
  funFact: { type: String, required: true },
  conservation: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

animalSchema.plugin(uniqueValidator);

export default mongoose.model<IAnimal>("Animal", animalSchema);
