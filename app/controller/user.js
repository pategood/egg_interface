'use strict'
const Controller = require('egg').Controller

  function toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
  }

class UserController extends Controller {

  // 获取个人用户信息
  async getMyInfo() {
    const { ctx, service } = this;
    ctx.result({ success: false, msg: 'id不能为空' })
    // const { id=1 } = ctx.query;
    // if (id) {
    //   ctx.result(await service.user.findOne({id:1}))
    // } else {
    //   ctx.result({ success: false, msg: 'id不能为空' })
    // }
    // try {
      // if (id) {
      //   ctx.result(await service.user.get(ctx.query));
      // } else {
      //   ctx.result({ success: false, msg: 'id不能为空' });
      // }
    // } catch (err) {
    //   ctx.sendError(err)
    // }
  }
}
module.exports = UserController
