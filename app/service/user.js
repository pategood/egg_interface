
'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find() {
    // "users" 为egg_db数据库数据表名
    const user = await this.app.mysql.query('select * from users', '');
    return { user };
  }
  async getAllUser() {
    const user = await this.app.mysql.query('select * from users', '');
    return { user };
  }
  async getMyUser() {
    const user = await this.app.mysql.query('select * from `users` where `id` = 2 limit 0, 1;', '')
    return { user };
  }
  // async create() {
  //   // "users" 为egg_db数据库数据表名
  //   const user = await this.app.mysql.query('select * from users', '');
  //   return { user };
  // }

}

module.exports = UserService;
