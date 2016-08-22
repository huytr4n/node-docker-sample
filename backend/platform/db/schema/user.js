'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: String,
  birth: String,
  email: String,
  password: String,
  hobies: [ String ]
});

/**
 * Expose.
 */
module.exports = () => {
  const User = mongoose.model('User', UserSchema);

  return User;
};
