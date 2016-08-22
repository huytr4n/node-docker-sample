'use strict';

const restify = require('restify');
const server = restify.createServer();
const DatabaseManager = require('../platform/db');
const databaseManager = new DatabaseManager();

// init database
databaseManager.init();

// configs
server.use(restify.acceptParser(server.acceptable));
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());

// hello enpoint
server.get('/', (req, res) => {
  res.send('Hello from server!');
});

/**
 * USER API
 */
server.get('/api/users', (req, res) => {
  databaseManager.db.dbUser.getAll((error, users) => {
    res.send(users);
  });
});

server.get('/api/users/create', (req, res) => {
  const data = req.query || {};

  databaseManager.db.dbUser.save(data, (error, user) => {
    res.send(user);
  });
});

module.exports = server;
