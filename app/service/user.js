
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
  // 获取我的用户信息 （只有一条）
  async getMyUser(userObj) {
    const userInfo = await this.app.mysql.select('users', { where: userObj })
    return userInfo
  }
  async isLogin(id) {
    const isLogin = await this.app.mysql.select(
      'users', {
        where: { accountID: id },
        columns: ['isLogin']}
      );
    return isLogin[0].isLogin
  }

  async login(id) {
    const result = await this.app.mysql.query(`update users set isLogin = 1 where accountID =  ${id} ;`, '')
    return result
  }

  // 注册
  async register(username, password) {
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
    const result = await this.app.mysql.query(`update users set isLogin = 0 where accountID =  ${id} ;`, '')
    // const result = await this.app.mysql.update('users', { isLogin: 0 });
    return result
  }

  // 更新用户信息
  async update(data) {
    const result = await this.app.mysql.update('users', data,{ where: { accountID: 5} })
    // const result = await this.app.mysql.update('users', { isLogin: 0 });
    return result
  }

  // async createUser() {
  //   const user = await this.app.mysql.insert('test_db', { test_db: 'testData' });
  //   return { user };
  // }
}

module.exports = UserService;
