const patron = require('patron.js');
const Constants = require('../../utility/Constants.js');

class Advertise extends patron.Command {
  constructor() {
    super({
      names: ['advertise', 'advertisement', 'advertisementmessage', 'advertisemessage'],
      groupName: 'system',
      description: 'Change the advertised message.',
      guildOnly: false,
      args: [
        new patron.Argument({
          name: 'advertisement',
          key: 'advertisement',
          type: 'string',
          example: 'Join our server!'
        })
      ]
    });
  }

  async run(msg, args) {
    Constants.data.messages.advertise = args.advertisement;

    return msg.createReply('you\'ve successfully set the advertisement message to ' + args.advertisement);
  }
}

module.exports = new Advertise();
