import mongoose from "mongoose";

const AnalysisSchema = new mongoose.Schema({
  sessionId: { type: mongoose.Schema.Types.ObjectId, ref: "Session", required: true, index: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
  modelVersionId: { type: mongoose.Schema.Types.ObjectId, ref: "ModelVersion" },
  summary: String,
  scores: {
    emotion: Number,
    voice: Number,
    content: Number,
    body: Number,
    overall: Number
  },
  kpis: mongoose.Schema.Types.Mixed
}, { timestamps: true });

export default mongoose.models.Analysis || mongoose.model("Analysis", AnalysisSchema);
