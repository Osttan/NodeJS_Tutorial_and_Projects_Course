var http = require('http');
var fs = require('fs');

http
  .createServer((req, res) => {
    // const text = fs.readFileSync(
    //   './Section_3_Node_Tutorial/content/bigger.txt',
    //   'utf8'
    // );
    // res.end(text);
    const fileStream = fs.createReadStream(
      './Section_3_Node_Tutorial/content/bigger.txt',
      'utf8'
    );
    fileStream.on('open', () => {
      fileStream.pipe(res);
    });
    fileStream.on('error', err => {
      res.end(err);
    });
  })
  .listen(5000);
