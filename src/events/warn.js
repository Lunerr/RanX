const client = require('../singletons/client.js');

client.on('warn', (warning) => console.log('Warning: ' + warning));