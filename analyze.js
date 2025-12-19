import express from "express";
import Session from "../models/Session.js";
import Analysis from "../models/Analysis.js";
// import callGrok from '../pipeline/grokClient.js'; // adapt to your grok call

const router = express.Router();

router.post("/analyze/:id", async (req, res) => {
  try {
    const session = await Session.findOne({ sessionId: req.params.id });
    if (!session) return res.status(404).json({ error: "Session not found" });

    // Run Grok AI model - replace this with your actual grok pipeline call
    // const result = await callGrok(session.rawVideoPath, session.rawAudioPath);
    // mock result for now
    const result = {
      summary: "Sample analysis (mock). Replace callGrok with your pipeline.",
      scores: { emotion: 0.7, voice: 0.6, content: 0.65, body: 0.5, overall: 0.615 },
      modelVersionId: null
    };

    const analysis = await Analysis.create({
      sessionId: session._id,
      userId: session.userId,
      summary: result.summary,
      scores: result.scores,
      modelVersionId: result.modelVersionId
    });

    session.latestAnalysisId = analysis._id;
    session.status = "done";
    session.progress = 100;
    await session.save();

    return res.json({ message: "✅ Analysis complete", analysis });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Analysis failed", details: err.message });
  }
});

export default router;
