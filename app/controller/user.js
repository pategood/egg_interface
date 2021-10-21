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
    console.log(ctx.query, 'query');
    const user = await ctx.service.user.getMyUser();
    ctx.body = {
      code: 0,
      post: ctx.request.body,
      id: ctx.request.body.id,
      data: user,
      msg: '',
    };
  }

  // 注册用户
  async register() {
    const { ctx } = this;
    const username = ctx.request.body.username;
    const password = ctx.request.body.password;
    // const createRule = {
    //   username: { type: 'string' },
    //   password: { type: 'string' },
    // };
    // // 校验参数;
    // ctx.validate(createRule);
    const user = await ctx.service.user.register(username, password);
    ctx.body = user;
  }

  // 退出账户
  async logout() {
    const { ctx } = this;
    const id = ctx.body.id;
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
