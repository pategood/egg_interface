module.exports = {
  sendSuccess: function (result, msg = '请求成功') {
    this.body = {
      code: 200,
      msg: msg,
      data: result,
    }
  },
  sendError: function (msg, code = 700) {
    this.body = {
      code: code,
      msg: msg.sqlMessage || msg || '请求失败',
    }
  },
  emptyError: function (msg, code = 700) {
    this.body = {
      code: code,
      msg: msg.sqlMessage || msg || '参数为空',
    }
  },
}