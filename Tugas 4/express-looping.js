// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint untuk menampilkan hasil looping
app.get('/looping', (req, res) => {
  let lines = [];

  // LOOPING PERTAMA
  lines.push('LOOPING PERTAMA');
  for (let i = 2; i <= 20; i += 2) {
    lines.push(`${i} - I love coding`);
  }

  // LOOPING PERTAMA
  lines.push('LOOPING KEDUA');
  for (let i = 20; i >= 2; i -= 2) {
    lines.push(`${i} - I will become a mobile developer`);
  }

  // Kirim Looping
  res.send(lines.join('\n'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
