'use strict'

const Service = require('egg').Service;

class UserService extends Service {
  constructor(ctx) {
    super(ctx);
    // 将用户的模型赋值在全局
    this.model = ctx.model.User;
  }

  /**
   * 查询单条(根据主键)
   */
  async findOne(params) {
    const data = await this.ctx.model.user._findOne(params)
    return {msg : '查询成功!',success: true,data};
  }
}
module.exports = UserService;