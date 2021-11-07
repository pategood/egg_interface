'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
  // 获取个人用户信息
  async login() {
    const { ctx, service } = this;
    const { username, password } = ctx.request.body;
    const createRule = {
      username: { type: 'string' },
      password: { type: 'string' },
    };
    try {
      const user = await service.user.getMyUser({ username, password });
      console.log(ctx.validate(createRule))
      ctx.sendSuccess(user)
    } catch (err) {
      ctx.sendError(err)
    }
  }
  
  // 注册用户
  async register() {
    const { ctx, service } = this;
    const { username, password } = ctx.request.body;
    const isExist = await service.user.getMyUser({ username });
    try {
      if (isExist.length) {
        ctx.sendError('注册失败,存在相同用户名')
      } else {
        const res = await service.user.register(username, password);
        ctx.sendSuccess(res, '注册成功')
      }
    } catch (err) {
      ctx.sendError(err)
    }
  }
  
  // 退出账户
  async logout() {
    const { ctx, service } = this;
    const { id } = ctx.query;
    try {
      const result = await service.user.logout(id);
      ctx.sendSuccess(result, '注销成功')
    } catch (err) {
      ctx.sendError(err)
    }
  }
  
  // 编辑用户
  async update() {
    const { ctx, service } = this
    console.log(ctx.query)
    const { id, password, email, phoneNumber, nickName, photo, create_time, age, sex } = ctx.query
    try {
      const result = await service.user.update({ id, password, email, phoneNumber, nickName, photo, create_time, age, sex })
      ctx.sendSuccess(result, '编辑成功')
    } catch (err) {
      ctx.sendError(err)
    }
  }
}

module.exports = UsersController;
