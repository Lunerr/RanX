const client = require('../singletons/client.js');

client.on('ready', () => {
  (async () => {
    return console.log(client.user.tag + ' has successfully connected.', 'INFO');
  })()
    .catch((err) => console.log('Error: ' + err));
});