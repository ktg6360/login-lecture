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

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    },{});

    return userInfo;
  }

  static save() {
    
  }
}

module.exports = UserStorage;