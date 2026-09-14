import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// 🔥 __dirname setup for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 Import routes (ESM syntax)
import reviewRoutes from './server/routes/reviews.js';
app.use('/api/reviews', reviewRoutes);

// 🔥 SERVE FRONTEND BUILD
const frontendPath = path.join(__dirname, 'dist');
console.log('📁 Frontend path:', frontendPath);
console.log('✅ Frontend exists:', fs.existsSync(frontendPath));

app.use(express.static(frontendPath));

// API Test Route
app.get('/api/test', (req, res) => {
  res.json({ success: true, message: 'Avana API is running' });
});

// 🔥 Catch-all — React app serve karo
app.get('*', (req, res) => {
  const indexPath = path.join(frontendPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Frontend not built. Run "npm run build".');
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}\n`);
});