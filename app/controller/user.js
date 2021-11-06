'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
  // 获取所有用户信息
  async getAllUser() {
    const { ctx } = this;
    const allUser = await ctx.service.user.getAllUser();
    ctx.body = {
      code: 0,
      data: allUser,
      msg: '请求成功!',
    };
  }
  // 获取个人用户信息
  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const createRule = {
      username: { type: 'string' },
      password: { type: 'string' },
    };
    // 校验参数;
    const user = await ctx.service.user.getMyUser(username, password);
    ctx.body = {
      code: ctx.validate(createRule),
      data: user,
      msg: '',
    };
  }

  // 注册用户
  async register() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    console.log('1111111111', ctx.request);
    const createRule = {
      username: { type: 'string' },
      password: { type: 'string' },
    };
    // 校验参数;
    const user = await ctx.service.user.register(username, password);
    console.log('user', user);
    ctx.body = {
      code: ctx.validate(createRule),
      data: user,
      msg: '',
    };
  }

  // 退出账户
  async logout() {
    const { ctx } = this;
    const { id = 2 } = ctx.request.body;
    const result = await ctx.service.user.logout(id);
    ctx.body = {
      data: result,
      code: 0,
      msg: '',
    };
  }


  // // 编辑用户
  // async update() {
  //   const { ctx } = this;
  //   const user = await ctx.service.user.update();
  //   ctx.body = user;
  // }

}

module.exports = UsersController;
