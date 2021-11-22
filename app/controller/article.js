'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
  async create(params) {
     const { ctx, service } = this
     const { id } = ctx.request.body
    try {
      const result = await app.model.article.create({
        title: params.title,
        content: params.content,
        user_id: params.user_id,
      })
      return result
    } catch (err) {
      console.log(err)
      return null
    }
  }
}

module.exports = UsersController;
