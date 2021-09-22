"use strict";

class UserStorage {
  static #users = {
    id: ["woori", "taegyu", "wecode"],
    psword: ["123", "1234", "123456"],
    name: ["우리밋", "김태규", "위코드"], 
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;