import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8000;

app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'home.html'));
});

app.get('/onboarding', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'onboarding.html'));
});

app.listen(port, () => {
  console.log(`port = ${port}`);
});
