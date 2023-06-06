const fs = require('fs');

// 3 ways
// rename(..., callback(error, data)) - async
// try { renameSync(...) } catch(e) { } - sync
// promises.rename().then().catch()

try {
  fs.renameSync('./text.txt', './file-new.txt');
} catch (error) {
  console.error(error);
}

fs.rename('./file-new.txt', './text.txt', (error) => {
  console.log(error);
});
console.log('hello');

fs.promises
  .rename('./text2.txt', './text-new.txt')
  .then(() => console.log('Done!'))
  .catch(console.error);
