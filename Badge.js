import mongoose from "mongoose";

const BadgeSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  title: String,
  description: String,
  criteria: mongoose.Schema.Types.Mixed,
}, { timestamps: true });

export default mongoose.models.Badge || mongoose.model("Badge", BadgeSchema);
