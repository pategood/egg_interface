
'use strict';

const Service = require('egg').Service;

class commonService extends Service {
  async find() {
    // "users" 为egg_db数据库数据表名
    const user = await this.app.mysql.query('select * from users', '');
    return { user };
  }


}

module.exports = commonService;
