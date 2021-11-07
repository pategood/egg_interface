
'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async findUserName() {
    const user = await this.app.mysql.query('select username from users', '')
    return user
  }
  async getAllUser() {
    const user = await this.app.mysql.query('select * from users', '')
    return user
  }
  async getMyUser(userObj) {
    const user = await this.app.mysql.select('users', { where: userObj })
    return user
  }

  // 注册
  async register(username, password) {
    // INSERT INTO `$users`(`create_time`) VALUES(NOW())\
    const user = await this.app.mysql.insert('users', {
      username,
      password,
      create_time: this.app.mysql.literals.now,
      // email: this.
    })
    return user
  }

  // 注销账户
  async logout(id) {
    const result = await this.app.mysql.query(`update users set isLogin = 1 where accountID =  ${id} ;`, '')
    // const result = await this.app.mysql.update('users', { isLogin: 0 });
    return result
  }

  // 更新用户信息
  async update(data) {
    const { id } = data
    console.log(data,`update users set ${data} where accountID =  ${id} ;`)
    const result = await this.app.mysql.query(`update users set isLogin = 1 where accountID =  ${id} ;`, '')
    // const result = await this.app.mysql.update('users', { isLogin: 0 });
    return result
  }

  // async createUser() {
  //   const user = await this.app.mysql.insert('test_db', { test_db: 'testData' });
  //   return { user };
  // }
}

module.exports = UserService;
