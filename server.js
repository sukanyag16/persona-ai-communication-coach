// backend/src/server.js
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

import createApp from './app.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = await createApp(); // returns express app (connects DB)
const PORT = Number(process.env.PORT || 5001);
const HOST = process.env.HOST || '0.0.0.0';

// Serve frontend build (if you have built it to project-root/dist)
const frontendDist = path.resolve(__dirname, '..', '..', 'dist');
app.use('/', (req, res, next) => {
  // Only try to serve static if dist exists
  try {
    // `express.static` below will be registered only if folder exists
    next();
  } catch (e) { next(); }
});
import express from 'express';
import fs from 'fs';
if (fs.existsSync(frontendDist)) {
  app.use(express.static(frontendDist));
  // SPA fallback
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(frontendDist, 'index.html'));
  });
  console.log('Serving frontend from', frontendDist);
}

const server = http.createServer(app);

server.listen(PORT, HOST, () => {
  console.log(`🚀 Backend listening on http://${HOST}:${PORT}`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
  process.exit(1);
});

