import Session from '../models/Session.js';
import { runAnalysisPipeline } from '../pipeline/analysisPipeline.js';

export const processJob = async ({ sessionId, rawVideoPath }) => {
  console.log(`[job] process ${sessionId}`);
  await Session.updateOne({ sessionId }, { status: 'processing', progress: 1 });

  try {
    const result = await runAnalysisPipeline(sessionId, rawVideoPath, (progress, stepMsg) => {
      // progress callback to update DB
      Session.updateOne({ sessionId }, { progress, 'status': 'processing' });
    });

    await Session.updateOne({ sessionId }, {
      status: 'done',
      progress: 100,
      analysis: result.analysis,
      artifacts: result.artifacts
    });
    console.log(`[job] done ${sessionId}`);
  } catch (err) {
    console.error(`[job] failed ${sessionId}`, err);
    await Session.updateOne({ sessionId }, { status: 'failed' });
    throw err;
  }
};
