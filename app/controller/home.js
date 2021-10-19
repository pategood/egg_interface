'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const user = await ctx.service.user.find();
    ctx.body = user;
  }
}

module.exports = HomeController;
