'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  // redis: {
  //   enable: true,
  //   package: 'egg-redis',
  // },
  // sequelize: {
  //   enable: true,
  //   package: 'egg-sequelize',
  // },
};
