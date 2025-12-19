import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true, index: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
  title: { type: String },
  domainId: { type: mongoose.Schema.Types.ObjectId, ref: "Domain" },
  durationSeconds: { type: Number },
  status: { type: String, default: "created", index: true },
  rawVideoPath: String,
  rawAudioPath: String,
  progress: { type: Number, default: 0 },
  latestAnalysisId: { type: mongoose.Schema.Types.ObjectId, ref: "Analysis" },
  localOnly: { type: Boolean, default: false },
}, { timestamps: true });

SessionSchema.index({ userId: 1, createdAt: -1 });
export default mongoose.models.Session || mongoose.model("Session", SessionSchema);
