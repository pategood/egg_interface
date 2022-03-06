'use strict';

const Controller = require('egg').Controller;

class VideoController extends Controller {
  async create() {
    // const { ctx, service } = this;

  }


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

}

module.exports = VideoController;
