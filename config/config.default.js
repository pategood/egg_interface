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
  // // Mysql
  // config.sequelize = {
  //   dialect: 'mysql',
  //   host: 'localhost',
  //   port: 3306,
  //   database: 'myprojectdb',
  //   username: 'root',
  //   password: '123456',
  //   define: {
  //     // freezeTableName默认值为false，会自动在表名后加s
  //     freezeTableName: true,
  //     // timestamps默认值为true，会自动添加create_time和update_time
  //     timestamps: false,
  //   },
  // };


  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3307,
    database: 'egg-sequelize-doc-default',
    username: 'root',
    password: '123456',
  };

  return {
    ...config,
    ...userConfig,
  };
};
