'use strict';

const users = require('../../data/users.json');

module.exports = {
  findById: (id, cb) => {
    for (const user of users) {
      if (user.id === id) {
        return cb(null, user);
      }
    }
    return cb(new Error('Unknown id'));
  },
  findByUsername: (username, cb) => {
    for (const user of users) {
      if (user.username === username) {
        return cb(null, user);
      }
    }
    return cb(new Error('Unknown username'));
  },
};
