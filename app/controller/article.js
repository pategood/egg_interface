'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
  async create() {
    const { ctx, service } = this
    const { user_id, title, content } = ctx.request.body
    const params = Object.assign(ctx.request.body, source)
    try {
      console.log(ctx.request.body)
      const data = await service.article.create(ctx.request.body)
      ctx.body = { code: 201, data, msg: '请求成功!' }
    } catch (err) {
      ctx.body = { code: 400, data:err, msg: '请求失败!' }
    }
  }
}

module.exports = UsersController;
