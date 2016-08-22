'use strict';

const User = require('../schema/user')();
const BaseService = require('../base-mongo-service');

class UserService extends BaseService {
  /**
   * @override
   */
  init() {
    this.model = User;
  }
}

/**
 * Expose.
 */
module.exports = UserService;
