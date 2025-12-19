import mongoose from "mongoose";

const DomainSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  scoringTemplate: {
    facial_expression: { type: Number, default: 0.25 },
    voice_modulation: { type: Number, default: 0.25 },
    content_effectiveness: { type: Number, default: 0.25 },
    body_language: { type: Number, default: 0.25 },
    min_score_floor: { type: Number, default: 0.25 }
  }
}, { timestamps: true });

export default mongoose.models.Domain || mongoose.model("Domain", DomainSchema);
