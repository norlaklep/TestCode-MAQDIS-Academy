// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint utama, menerima nama & peran via query
app.get('/game', (req, res) => {
  const nama = (req.query.nama || '').trim();
  const peran = (req.query.peran || '').trim();
  
  if (!nama) {
    // Validasi nama kosong
    return res.send('Nama harus diisi!');
  }

  if (!peran) {
    // Validasi peran kosong
    return res.send(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
  }
  
  let pesan = `Selamat datang di Dunia Werewolf, ${nama}\n`;
  const lower = peran.toLowerCase();

  if (lower === 'penyihir') {
    pesan += `Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`;
  } else if (lower === 'guard') {
    pesan += `Halo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`;
  } else if (lower === 'werewolf') {
    pesan += `Halo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!`;
  } else {
    pesan += `Peran tidak dikenal: ${peran}`;
  }
  
  res.send(pesan);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
