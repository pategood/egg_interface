'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
  // 获取用户信息
  async getAllUser() {
    const { ctx } = this;
    const user = await ctx.service.user.getAllUser();
    ctx.body = user;
  }
  // 获取个人用户信息
  async login() {
    const { ctx } = this;
    const user = await ctx.service.user.getMyUser();
    // ctx.body = user;
    ctx.body = {
      code: 0,
      post: ctx.request.body,
      id: ctx.request.body.id,
      data: user,
      msg: '',
    };
  }
  // // 注册用户
  // async create() {
  //   const { ctx } = this;
  //   const user = await ctx.service.user.create();
  //   ctx.body = user;
  // }
  // // 编辑用户
  // async update() {
  //   const { ctx } = this;
  //   const user = await ctx.service.user.update();
  //   ctx.body = user;
  // }

}

module.exports = UsersController;
