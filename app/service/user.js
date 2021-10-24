
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
    return user;
  }
  async getMyUser(username, password) {
    const user = await this.app.mysql.select('users', { where: { username, password } });
    return user;
  }
  // 注册
  async register(username, password) {
    // INSERT INTO `$users`(`create_time`) VALUES(NOW())
    const user = await this.app.mysql.insert('users', {
      username,
      password,
      create_time: this.app.mysql.literals.now,
      // email: this.
    });
    return { user };
  }

  // 注销账户
  async logout(id) {
    const result = await this.app.mysql.query(`update users set isLogin = 1 where accountID =  ${id} ;`, '');
    // const result = await this.app.mysql.update('users', { isLogin: 0 });
    return result;
  }

  // async createUser() {
  //   const user = await this.app.mysql.insert('test_db', { test_db: 'testData' });
  //   return { user };
  // }
}

module.exports = UserService;
