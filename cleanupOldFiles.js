import fs from "fs";
import path from "path";

const UPLOAD_DIR = process.env.UPLOAD_DIR || 'uploads';
const DAYS_OLD = parseInt(process.env.DELETE_AFTER_DAYS || '90', 10);
const cutoff = Date.now() - DAYS_OLD * 24 * 60 * 60 * 1000;

function cleanup(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(file => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) cleanup(filepath);
    else if (stat.mtimeMs < cutoff) {
      fs.unlinkSync(filepath);
      console.log('🗑️ Deleted old file:', filepath);
    }
  });
}

cleanup(UPLOAD_DIR);
