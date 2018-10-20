const client = require('../singletons/client.js');

client.on('disconnect', () => {
  (async () => {
    console.log(client.user.username + ' has disconnected.');
  })()
    .catch((err) => console.log('Error: ' + err));
});
