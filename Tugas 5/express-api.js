// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// GET /hello
app.get('/hello', (req, res) => {
  res.json({
    status: 'success',
    message: 'welcome to Maqdis Academy',
  });
});

// POST /data
app.post('/data', (req, res) => {
  res.json({ data: 100, status: 'berhasil' });
});

// POST /hapus
app.post('/hapus', (req, res) => {
  res.json({ data: 0, status: 'berhasil hapus' });
});

// GET /hapus-data
app.get('/hapus-data', (req, res) => {
  res.json({
    message: 'berhasil',
    id_setoran: 58,
    id_user: 3441,
    id_juz: 30,
  });
});

// 404 untuk route lain
app.use((req, res) => {
  res.status(404).json({ status: 'not_found', path: req.originalUrl });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
