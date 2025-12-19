import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import Session from "../src/models/Session.js";
import Analysis from "../src/models/Analysis.js";
import Metric from "../src/models/Metric.js";
import Domain from "../src/models/Domain.js";

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Session.syncIndexes();
  await Analysis.syncIndexes();
  await Metric.syncIndexes();
  await Domain.syncIndexes();
  console.log("✅ Indexes created successfully");
  process.exit(0);
})().catch(err => { console.error(err); process.exit(1); });
