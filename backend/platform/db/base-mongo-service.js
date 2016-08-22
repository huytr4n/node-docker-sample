'use strict';

class BaseMongoService {
  constructor() {

  }

  save(data, fn) {
    if (!this.model)
      throw new Error('This service has no model');

    const document = new this.model(data);

    return document.save(fn);
  }

  getAll(fn) {
    if (!this.model)
      throw new Error('This service has no model');

    this.model.find({}, (error, documents) => {
      return fn (error, documents);
    });
  }
}

/**
 * Expose.
 */
module.exports = BaseMongoService;
