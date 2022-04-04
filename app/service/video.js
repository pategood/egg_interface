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


  async list({ offset = 0, limit = 20 }) {
    return this.ctx.model.Video.findAndCountAll({
      offset,
      limit,
      order: [
        [ 'create_time', 'desc' ],
        [ 'id', 'desc' ],
      ],
    });
  }
}

module.exports = VideoService;
