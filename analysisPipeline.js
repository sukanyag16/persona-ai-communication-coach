import path from 'path';
import fs from 'fs-extra';
import config from '../config/index.js';
import * as ffmpegService from '../services/ffmpegService.js';
import * as asrService from '../services/asrService.js';
import * as diarizationService from '../services/diarizationService.js';
import * as prosodyService from '../services/prosodyService.js';
import * as visionService from '../services/visionService.js';
import * as nlpService from '../services/nlpService.js';
import * as featuresService from '../services/featuresService.js';
import * as scoringService from '../services/scoringService.js';
import * as llmService from '../services/llmService.js';
import * as reportService from '../services/reportService.js';

export async function runAnalysisPipeline(sessionId, videoPath, progressCb = () => {}) {
  const tmpDir = path.join(process.cwd(), 'uploads', sessionId);
  await fs.ensureDir(tmpDir);

  progressCb(5, 'extracting audio');
  // 1. extract audio
  const audioPath = path.join(tmpDir, `${sessionId}.wav`);
  const normalizedAudio = await ffmpegService.extractAndNormalize(videoPath, audioPath);

  progressCb(20, 'transcribing audio');
  // 2. ASR
  const transcript = await asrService.transcribe(normalizedAudio);

  progressCb(35, 'diarization (turn detection)');
  // 3. diarization (basic)
  const diarization = await diarizationService.detectTurns(normalizedAudio);

  progressCb(45, 'prosody analysis');
  // 4. prosody features
  const prosody = await prosodyService.extractProsody(normalizedAudio, transcript);

  progressCb(60, 'visual analysis');
  // 5. vision analysis (face/smile/gaze)
  const vision = await visionService.analyzeVideo(videoPath);

  progressCb(75, 'nlp analysis');
  // 6. transcript NLP
  const nlp = nlpService.analyzeTranscript(transcript);

  progressCb(85, 'feature engineering');
  // 7. features fusion
  const features = featuresService.buildFeatures({ nlp, prosody, vision, diarization });

  progressCb(90, 'scoring');
  // 8. scoring
  const scores = scoringService.computeScores(features);

  progressCb(95, 'LLM report generation');
  // 9. LLM report
  const llmReport = await llmService.generateReport({ sessionId, features, scores, transcript });

  progressCb(98, 'rendering report');
  // 10. render report to PDF
  const pdfPath = await reportService.renderReportToPDF(sessionId, llmReport);

  // artifacts to save
  const artifacts = {
    rawVideo: videoPath,
    audio: normalizedAudio,
    transcript: transcript,
    prosody,
    vision,
    features,
    scores,
    llmReport,
    reportPdf: pdfPath
  };

  const analysis = {
    summary: llmReport.summary || null,
    metrics: features,
    scores,
    llmReport
  };

  return { artifacts, analysis };
}
