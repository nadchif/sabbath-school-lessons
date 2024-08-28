const http = require('http');
const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'dist');

const server = http.createServer((req, res) => {
  const filePath = path.join(folderPath, req.url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({data: null}));
    } else {
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept',
      });
      res.end(data);
    }
  });
});

const port = 9000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
