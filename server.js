import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import reviewRoutes from './server/routes/reviews.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/reviews', reviewRoutes);

const frontendPath = path.join(__dirname, 'dist');

console.log('📁 Frontend path:', frontendPath);
console.log('✅ Frontend exists:', fs.existsSync(frontendPath));

app.use(express.static(frontendPath));

app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'Avana API is running',
  });
});

app.get('*', (req, res) => {
  const indexPath = path.join(frontendPath, 'index.html');

  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Frontend not built.');
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});