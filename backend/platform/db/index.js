'use strict';

const DbUser = require('./services/dbusers');
const mongoose = require('mongoose');
const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_DATABASE = process.env.MONGO_DATABASE || 'sample';
const connectionString = `mongodb://${MONGO_HOST}/${MONGO_DATABASE}`;

mongoose.connect(connectionString);

class DatabaseManager {
  /**
   * TODO: Connect to mongoose and register service by name.
   */
  init() {
    const dbUser = new DbUser();
    dbUser.init();

    this.db = {};
    this.db.dbUser = dbUser;
  }
}

/**
 * Expose.
 */
module.exports = DatabaseManager;
