import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
  analysisId: { type: mongoose.Schema.Types.ObjectId, ref: "Analysis", required: true },
  pdfPath: String,
  csvPath: String,
  generatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.models.Report || mongoose.model("Report", ReportSchema);
