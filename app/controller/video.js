'use strict';

const Controller = require('egg').Controller;

class VideoController extends Controller {
  async show() {
    // 显示某记录具体的数据-R
    const { ctx, service } = this;
    try {
      const data = await service.video.findOne(ctx.helper.parseInt(ctx.params.id));
      if (data) {
        ctx.body = { code: 200, data, msg: '请求成功!' };
      }
      ctx.body = { code: 404, data, msg: '不存在该视频!' };
    } catch (error) {
      ctx.body = { code: 404, msg: error.message || '请求失败!' };
    }
  }

  async index() {
    const { ctx, service } = this;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };
    const data = await service.video.list(query);
    const json = ctx.helper.json(data);
    ctx.body = json;
  }

}

module.exports = VideoController;
