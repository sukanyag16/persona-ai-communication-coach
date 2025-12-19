import { Queue } from 'bullmq';
import config from '../config/index.js';

export const processQueue = new Queue('analysis', {
  connection: { host: config.REDIS.host, port: config.REDIS.port }
});

export const enqueueProcess = async (payload) => {
  await processQueue.add('process', payload, { attempts: 3, backoff: { type: 'exponential', delay: 5000 } });
};
