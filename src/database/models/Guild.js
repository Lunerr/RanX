class Guild {
  constructor(guildId) {
    this.guildId = guildId;
    this.roles = {
      member: null
    };
  }
}

module.exports = Guild;
