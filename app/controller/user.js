'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
  async login() {
    const { ctx, service, app } = this;
    const { username, password } = ctx.request.body;
    const isExist = await service.user.isExist(username);
    if (isExist) {
      const data = await service.user.login(username, password);
      if (data) {
        const token = app.jwt.sign({ username, password }, app.config.jwt.secret, {
          expiresIn: '60m',
        });
        ctx.body = { code: 200, token, msg: '请求成功!' };
      } else {
        ctx.body = { code: 400, msg: '请求失败!' };
      }
    }
  }

  async index() {
    // 展示列表数据-L
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };

    const data = await ctx.service.user.list(query);
    const json = ctx.helper.json(data);
    ctx.body = json;
  }

  async show() {
    // 显示某记录具体的数据-R
    const ctx = this.ctx;
    console.log(ctx.params.id);
    const data = await ctx.service.user.find(ctx.helper.parseInt(ctx.params.id));
    ctx.body = { code: 200, data, msg: '请求成功!' };
  }

  async create() {
    // 新增一个记录-C
    const { ctx, service } = this;
    const { username } = ctx.request.body;
    if (!username) {
      ctx.result({ code: 400, msg: '账号不能为空！' });
    } else {
      const user = await service.user.create(ctx.request.body);
      ctx.body = { code: 201, data: user, msg: '请求成功!' };
    }
  }

  async update() {
    // 更新指定的记录-U
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    try {
      const data = await ctx.service.user.update({
        id,
        updates: body,
      });
      ctx.body = { code: 200, data, msg: '更新成功！' };
    } catch (err) {
      ctx.body = err;
    }
  }

  async destroy() {
    // 删除指定的记录-D
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const res = await ctx.service.user.del(id);
    if (res) ctx.result({ code: 200, msg: '删除成功！' });

    // ctx.body = { code: 201, data: user, msg: '请求成功!' }
  }
}

module.exports = UsersController;
