const patron = require('patron.js');
const path = require('path');
const registry = new patron.Registry({ library: 'discord.js' });

registry.registerGlobalTypeReaders();
registry.registerLibraryTypeReaders();
registry.registerGroups(patron.RequireAll(path.join(__dirname, '../groups')));
registry.registerCommands(patron.RequireAll(path.join(__dirname, '../commands')));

module.exports = registry;
