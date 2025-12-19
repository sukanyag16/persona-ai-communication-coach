import mongoose from "mongoose";

const MetricSchema = new mongoose.Schema({
  analysisId: { type: mongoose.Schema.Types.ObjectId, ref: "Analysis", required: true, index: true },
  metricName: { type: String, index: true },
  timestampMs: { type: Number, index: true },
  value: mongoose.Schema.Types.Mixed,
}, { timestamps: true });

export default mongoose.models.Metric || mongoose.model("Metric", MetricSchema);
