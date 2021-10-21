/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1634199877026_3436';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'egg_db',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.validate = {
    convert: true,
    widelyUndefined: true,
  };
  // config.redis = {
  //   client: {
  //     port: 3306,
  //     host: 'localhost',
  //     user: 'root',
  //     password: '123456',
  //     database: 'egg_db',
  //   },
  // };


  // csrf 安全配置
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // 允许访问接口的白名单
    domainWhiteList: [ '*' ], // ['http://localhost:8080']
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH',
  };

  return {
    ...config,
    ...userConfig,
  };
};
