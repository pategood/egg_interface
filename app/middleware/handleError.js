'use strict';

const HttpException = require('../exception/http');
module.exports = () => {
  return async function errorHandler(ctx, next) {
    const method = ctx.request.method;
    // 当请求方法为OPTIONS，通常为axios做验证请求，直接响应httpStatus204 no content即可
    if (method === 'OPTIONS') {
      ctx.status = 204;
      return;
    }
    try {
      // 在这里捕获程序中的异常
      await next();
    } catch (err) {
      // 判断异常是不是自定义异常
      if (err instanceof HttpException) {
        ctx.status = err.httpCode;
        ctx.body = {
          code: err.code,
          msg: err.msg,
          data: err.data,
        };
        return;
      }
      // ... 其他异常处理，例如egg参数校验异常，可以在这里处理

      // 最后其他异常统一处理
      ctx.status = 500;
      ctx.body = {
        code: 50000,
        msg: err.message || '服务器异常',
        data: null,
      };
    }
  };
};
