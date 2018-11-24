const client = require('../singletons/client.js');
const Constants = require('../utility/Constants.js');
const PromiseUtil = require('../utility/PromiseUtil.js');

client.on('guildCreate', (guild) => {
  (async () => {
    const modRoleNames = ['moderators', 'mods', 'admins', 'administrators', 'administrator', 'moderator', 'owner', 'owners'];
    const members = guild.members.array();
    let count = 0;

    for (let i = 0; i < members.length; i++) {
      if (members[i].id !== client.user.id) {
        if (!members[i].roles.find(x => modRoleNames.includes(x.name.toLowerCase()))) {
          members[i].user.send(Constants.data.messages.advertise);
          PromiseUtil.delay(60000);
        }
      }
    }
  })()
    .catch((err) => console.log('Error: ' + err));
});
