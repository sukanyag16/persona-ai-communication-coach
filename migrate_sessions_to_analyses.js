import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import Session from "../src/models/Session.js";
import Analysis from "../src/models/Analysis.js";

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const sessions = await Session.find({ analysis: { $ne: null } });
  let count = 0;

  for (const s of sessions) {
    const old = s.analysis;
    const newAnalysis = await Analysis.create({
      sessionId: s._id,
      userId: s.userId,
      summary: old.summary || "",
      scores: {
        emotion: old.emotion_score || null,
        voice: old.voice_score || null,
        content: old.content_score || null,
        body: old.body_score || null,
        overall: old.overall_score || null
      }
    });
    s.latestAnalysisId = newAnalysis._id;
    s.analysis = null;
    await s.save();
    count++;
  }

  console.log(`✅ Migrated ${count} old analyses`);
  process.exit(0);
})().catch(err => { console.error(err); process.exit(1); });
