const os = require('os')

console.log('Operating System: ', os.platform())
console.log('Processor architecture: ', os.arch())
console.log('Processors info: ', os.cpus())
console.log('Free memory', os.freemem())
console.log('Total memory', os.totalmem())
console.log('Home Directory: ', os.homedir())
console.log('Uptime: ', os.uptime())
