const os = require('os');

console.log("Total Memory Available:", os.totalmem());
console.log("Free Memory Available:", os.freemem());

console.log("Operating System Platform:", os.platform());
console.log("Number of CPU Cores:", os.cpus().length);