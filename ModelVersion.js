import mongoose from "mongoose";

const ModelVersionSchema = new mongoose.Schema({
  modelName: String,
  version: String,
  dateLoaded: { type: Date, default: Date.now },
  notes: String
});

export default mongoose.models.ModelVersion || mongoose.model("ModelVersion", ModelVersionSchema);
