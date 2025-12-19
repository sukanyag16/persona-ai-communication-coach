import { Worker } from 'bullmq';
import config from '../config/index.js';
import { processJob } from '../jobs/processJob.js';

export const initWorker = () => {
  console.log('[worker] starting...');
  const worker = new Worker('analysis', async job => {
    if (job.name === 'process') {
      await processJob(job.data);
    }
  }, { connection: { host: config.REDIS.host, port: config.REDIS.port } });

  worker.on('completed', (job) => console.log(`[worker] completed job ${job.id}`));
  worker.on('failed', (job, err) => console.error(`[worker] job failed ${job.id}`, err));
};
