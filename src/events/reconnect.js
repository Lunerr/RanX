const client = require('../singletons/client.js');

client.on('reconnect', () => {
  (async () => {
    console.log('Attempting to reconnect...');
  })()
    .catch((err) => console.log('Error: ' + err));
});