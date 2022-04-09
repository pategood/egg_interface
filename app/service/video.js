'use strict';

const { Op } = require('sequelize');
const Service = require('egg').Service;
class VideoService extends Service {

  async findOne(id) {
    const video = await this.ctx.model.Video.findOne({
      where: { video_id: id },
    });
    if (!video) {
      this.ctx.throw(404, 'video not found');
    } else {
      return video;
    }
  }


  async list(params) {
    const { pageInfo, reqQuery } = params;
    const offset = pageInfo.pageSize * pageInfo.pageIndex || 0;
    const limit = Number(pageInfo.pageSize || 20);
    return this.ctx.model.Video.findAndCountAll({
      offset: Number(offset),
      limit: Number(limit),
      order: [
        [ 'create_time', 'desc' ],
        [ 'id', 'asc' ],
      ],
    });
  }
}

module.exports = VideoService;
