const Constants = require('../utility/Constants.js');
const Logger = require('../utility/Logger.js');
const client = require('../singletons/client.js');

client.on('ready', () => {
  (async () => {
    return Logger.log(client.user.tag + ' has successfully connected.', 'INFO');
  })()
    .catch((err) => Logger.handleError(err));
});