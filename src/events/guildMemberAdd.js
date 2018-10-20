const client = require('../singletons/client.js');

client.on('guildMemberAdd', (member) => {
  (async () => {
  })()
    .catch((err) => Logger.handleError(err));
});
