const { readFile, writeFile } = require('fs').promises;
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile(
      './Section_3_Node_Tutorial/content/first.txt',
      'utf8'
    );
    const second = await readFile(
      './Section_3_Node_Tutorial/content/second.txt',
      'utf8'
    );
    await writeFile(
      './Section_3_Node_Tutorial/content/result-mind-grenade.txt',
      `THIS IS AWESOME: ${first} ${second}`,
      { flag: 'a' }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = path => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText('./Section_3_Node_Tutorial/content/first.txt')
//   .then(result => console.log(result))
//   .catch(err => console.log(err));
