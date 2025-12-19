# Persona Backend Upgrade - Ready to Import

This package contains improved database models, migration and utility scripts, and a sample analyze route designed to integrate into an existing Node.js / Express backend.

## What is included
- src/config/database.js (MongoDB connection helper)
- src/models/* (User, Session, Analysis, Metric, Report, Domain, Badge, ModelVersion)
- src/routes/analyze.js (example route showing how to create Analysis documents)
- migrations/migrate_sessions_to_analyses.js (one-time migration script)
- scripts/ensureIndexes.js (create indexes)
- scripts/cleanupOldFiles.js (delete old upload files)
- docker-compose.yml (for MongoDB + MinIO if desired)
- .env.example

## Quick install
1. Copy the `src` folder into your backend root (merge with your existing src).
2. Copy `migrations` and `scripts` folders into your backend root.
3. Copy `.env.example` to `.env` and edit values.
4. Ensure your project uses ESM ("type": "module" in package.json) or adapt imports.
5. Start MongoDB (use the included docker-compose or your own instance):
   ```
   docker compose up -d
   ```
6. Start your backend:
   ```
   npm install
   npm start
   ```
7. Run index creation (once):
   ```
   node backend/scripts/ensureIndexes.js
   ```
8. If you had old embedded analyses, run migration (once):
   ```
   node backend/migrations/migrate_sessions_to_analyses.js
   ```

## Integration notes
- Replace the mock `callGrok` in `src/routes/analyze.js` with your actual Grok pipeline call.
- Update file paths (uploads/minio) as per your storage setup.
- Add authentication to routes and protect access to user/session resources.
