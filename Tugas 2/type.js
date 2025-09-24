const express = require('express');
const app = express();

const variable1 = "MAQDIS";
const variable2 = 'Academy';
const variable3 = 'is';
const variable4 = 'awesome';

app.get('/', (req, res) => {
  res.send(`${variable1} ${variable2} ${variable3} ${variable4}`); // MAQDIS Academy is awesome
});

app.listen(3000, () => console.log('Listening on http://localhost:3000'));