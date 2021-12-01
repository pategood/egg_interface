'use strict';

const Controller = require('egg').Controller;

class ArticelsController extends Controller {
  async create() {
    const { ctx, service } = this;
    try {
      const data = await service.article.create(ctx.request.body);
      ctx.body = { code: 201, data, msg: '请求成功!' };
    } catch (err) {
      ctx.body = { code: 400, data: err, msg: '请求失败!' };
    }
  }

  async show() {
    // 显示某记录具体的数据-R
    const { ctx, service } = this;
    try {
      const data = await service.article.findOne(ctx.helper.parseInt(ctx.params.id));
      if (data) {
        ctx.body = { code: 200, data, msg: '请求成功!' };
      }
      ctx.body = { code: 404, data, msg: '请求失败!' };
    } catch (error) {
      ctx.body = { code: 404, msg: error.message || '请求失败!' };
    }
  }

  async update() {
    // 更新指定的记录-U
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    try {
      const data = await ctx.service.article.update({
        id,
        updates: body,
      });
      ctx.body = { code: 200, data, msg: '更新成功！' };
    } catch (error) {
      ctx.body = error;
    }
  }

  async destroy() {
    // 删除指定的记录-D
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    try {
      const res = await ctx.service.article.del(id);
      if (res) {
        ctx.result({ code: 200, msg: '删除成功！' });
      }
    } catch (e) {
      ctx.body = e;
    }
    // ctx.body = { code: 201, data: user, msg: '请求成功!' }
  }
}

module.exports = ArticelsController;
