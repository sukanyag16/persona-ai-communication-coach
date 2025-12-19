// backend/src/app.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import sessionsRouter from './routes/sessions.js';
import dotenv from 'dotenv';
dotenv.config();

export default async function createApp() {
  const app = express();

  app.use(cors({
    origin: process.env.FRONTEND_ORIGIN || ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true,
  }));
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  // connect to MongoDB (if you want to use it)
  const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ai_coach';
  try {
    await mongoose.connect(mongoUri, {
      // options are chosen to work for modern mongoose
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.warn('⚠️ MongoDB connection failed — continuing without DB:', err.message);
  }

  // health route
  app.get('/api/health', (_, res) => res.json({ status: 'OK', env: process.env.NODE_ENV || 'dev' }));

  // API routes
  app.use('/api/sessions', sessionsRouter);

  return app;
}
