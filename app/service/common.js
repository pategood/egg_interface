
'use strict';

const { Op } = require('sequelize');
const Service = require('egg').Service;
class CommonService extends Service {

  async headGet() {
    const { ctx } = this;
    const userToken = ctx.get('USER-TOKEN');
  }
}

module.exports = CommonService;
