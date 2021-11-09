'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
  // 获取个人用户信息
  async getMyInfo() {
    const { ctx, service } = this;
    const { id } = ctx.query;
    try {
      const result = await service.user.getMyUser({ accountID:id });
      ctx.sendSuccess(result[0])
    } catch (err) {
      ctx.sendError(err)
    }
  }
  // 登录
  async login() {
    const { ctx, service } = this;
    const { username, password } = ctx.request.body;
    if (!password || password.length < 6) {
      ctx.sendError('密码长度小于6位')
      return
    }
    const userInfo = await service.user.getMyUser({ username, password })
    const { accountID } = userInfo[0]
    try {
      const login = await service.user.login(accountID)
      ctx.sendSuccess('登录成功')
    } catch (err) {
      ctx.sendError(err)
    }
  }
  
  // 注册用户
  async register() {
    const { ctx, service } = this;
    const { username, password } = ctx.request.body;
    if (!password || password.length < 6) {
      ctx.sendError('密码长度小于6位')
      return
    }
    const isExist = await service.user.getMyUser({ username });
    try {
      if (isExist.length <= 0 || isExist==='undefined') {
        const res = await service.user.register(username, password)
        ctx.sendSuccess(res, '注册成功')
      } else {
        ctx.sendError('注册失败,存在相同用户名')
      }
    } catch (err) {
      ctx.sendError(err)
    }
  }
  
  // 退出账户
  async logout() {
    const { ctx, service } = this;
    const { id } = ctx.query;
    const isLogin = await service.user.isLogin(id);
    try {
      if (isLogin) {
        const result = await service.user.logout(id);
        ctx.sendSuccess(result, '注销成功')
      } else{
        ctx.sendError('用户已退出')
        return
      }
    } catch (err) {
      ctx.sendError(err)
    }
  }
  
  // 编辑用户
  async update() {
    const { ctx, service } = this
    // 此处解析存在的变量
    const { id=11, password=777777, email="", phoneNumber, nickName, photo, create_time, age, sex } = ctx.query
    if (!password || password.length < 6) {
      ctx.sendError('密码长度小于6位')
      return
    }
    const data = { accountID:id, password, email, phoneNumber, nickName, photo, create_time, age, sex }
    const keys = Object.keys(data)
    for (var key of keys) {
      const val = data[key]
      if (typeof val === 'undefined'|| val === null||isNaN(val)) {
        delete data[key];     
      }
    }
    try {
      const result = await service.user.update(data)
      ctx.sendSuccess(result, '编辑成功')
    } catch (err) {
      ctx.sendError(err)
    }
  }
}

module.exports = UsersController;
