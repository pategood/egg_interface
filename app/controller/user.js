'use strict';
// import utils from '../utils/md5.js'
const utils = require('../utils/md5.js')
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
  async md5Login() {
    const { ctx, service } = this
    const { username, password } = ctx.request.body
    let user_ticket = utils.md5(utils.md5(utils.md5(password)))
    console.log(user_ticket)
  }
  // 登录
  async login() {
    const { ctx, service } = this;
    const { username, password } = ctx.request.body;
    const isExist = await service.user.getMyUser({ username })
    try {
      if (isExist) {
        const userInfo = await service.user.getMyUser({ username, password })
        if (userInfo.length <= 0 || userInfo === 'undefined') {
          ctx.sendError('密码错误')
          return 
        }
        const { accountID } = userInfo[0]
        const login = await service.user.login(accountID)
        if (login.changedRows > 0) {
          ctx.sendSuccess('登录成功') 
        } else {
          ctx.sendError('请勿重复登录')
        }
        console.log()
      } else {
        ctx.sendError('登录失败,请注册')
        return
      }
    } catch (err) {
      ctx.sendError(err)
    }
  }
  
  // 注册用户
  async register() {
    const { ctx, service } = this;
    const { username, password } = ctx.request.body;
    const isExist = await service.user.getMyUser({ username });
    try {
      if (isExist.length <= 0 || isExist==='undefined') {
        const res = await service.user.register(username, password)
        if (res.insertId>0) {
          ctx.sendSuccess(res, '注册成功')
        } else {
          ctx.sendError('注册失败')
        }
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
