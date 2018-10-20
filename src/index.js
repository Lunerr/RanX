require('./extensions');
const path = require('path');
const patron = require('patron.js');
const client = require('./singletons/client.js');
const registry = require('./singletons/registry.js');

client.registry = registry;

patron.RequireAll(path.join(__dirname, 'events'));

(async () => {
  client.login('Token');
})()
  .catch((err) => console.log(err));
