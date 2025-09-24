
const http = require('node:http');

const PORT = 3000; 

const server = http.createServer((req, res) => {

  const sendJSON = (statusCode, obj) => {
    const json = JSON.stringify(obj); 
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(json); 
  };

  const { method, url } = req;


  if (method === 'GET' && url === '/hello') {
    return sendJSON(200, {
      status: 'success',
      message: 'welcome to Maqdis Academy',
    }); 
  }

 
  if (method === 'POST' && url === '/data') {
    return sendJSON(200, { data: 100, status: 'berhasil' }); 
  }


  if (method === 'POST' && url === '/hapus') {
    return sendJSON(200, { data: 0, status: 'berhasil hapus' });
  }


  if (method === 'GET' && url === '/hapus-data') {
    return sendJSON(200, {
      message: 'berhasil',
      id_setoran: 58,
      id_user: 3441,
      id_juz: 30,
    }); 
  }

  // 404 untuk route lain
  sendJSON(404, { status: 'not_found', path: url }); 
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`); 
});
