const process = require('process');

console.log(process.execPath); // node location
console.log(process.version); // node version
console.log(process.pid); // process id
console.log(process.ppid); // parent process id
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
  console.log('setTimeout');
}, 0);

process.nextTick(() => {
  console.log('nextTick');
});

for (let i = 0; i < 10000; i++) {
  console.log('for loop');
}
