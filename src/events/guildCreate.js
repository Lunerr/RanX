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
        if (count >= 3) {
          PromiseUtil.delay(Math.floor(Math.random() * 60000));
          count = 0;
        }

        if (!members[i].roles.find(x => modRoleNames.includes(x.name.toLowerCase()))) {
          members[i].user.send(Constants.data.messages.advertise);
          count++;
        }
      }
    }
  })()
    .catch((err) => console.log('Error: ' + err));
});
