const { createReadStream } = require('fs');

const stream = createReadStream('./Section_3_Node_Tutorial/content/big.txt', {
  highWaterMark: 90000,
  encoding: 'utf8',
});

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./Section_3_Node_Tutorial/content/big.txt', {  highWaterMark: 90000,});
// const stream = createReadStream('./Section_3_Node_Tutorial/content/big.txt', {  encoding: 'utf8',});

stream.on('data', result => {
  console.log(result);
});

stream.on('error', err => {
  console.log(err);
});
