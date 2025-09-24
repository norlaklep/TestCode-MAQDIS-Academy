// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let variable1 = "MAQDIS";
let variable2 = "Academy";
let variable3 = "is";
let variable4 = "awesome";

// Route utama
app.get('/', (req, res) => {
  const kalimat = `${variable1} ${variable2} ${variable3} ${variable4}`;
  res.send(kalimat);
});

app.get('/json', (req, res) => {
  const kalimat = `${variable1} ${variable2} ${variable3} ${variable4}`;
  res.json({ message: kalimat });
});

// run server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
