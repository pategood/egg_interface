'use strict';

const Service = require('egg').Service;

class CacheService extends Service {
  /**
   * 设置 redis 缓存
   * @param { String } key 键
   * @param {String | Object | array} value 值
   * @param { Number } expir 过期时间 单位秒
   * @return { String } 返回成功字符串OK
   */
  async set(key, value, expir = 0) {
    const { redis } = this.app;
    if (expir === 0) {
      return await redis.set(key, JSON.stringify(value));
    }
    return await redis.set(key, JSON.stringify(value), 'EX', expir);

  }

  /**
   * 获取 redis 缓存
   * @param { String } key 键
   * @return { String | array | Object } 返回获取的数据
   */
  async get(key) {
    const { redis } = this.app;
    const result = await redis.get(key);
    return JSON.parse(result);
  }

  /**
   * redis 自增
   * @param { String } key 键
   * @param { Number } value 自增的值
   * @return { Number } 返回递增值
   */
  async incr(key, number = 1) {
    const { redis } = this.app;
    if (number === 1) {
      return await redis.incr(key);
    }
    return await redis.incrby(key, number);

  }

  /**
   * 查询长度
   * @param { String } key
   * @return { Number } 返回数据长度
   */
  async strlen(key) {
    const { redis } = this.app;
    return await redis.strlen(key);
  }
}

module.exports = CacheService;
