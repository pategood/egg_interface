'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  // cors: {
  //   enable: true,
  //   package: 'egg-cors',
  // },
  // redis: {
  //   enable: true,
  //   package: 'egg-redis',
  // },
  // sequelize: {
  //   enable: true,
  //   package: 'egg-sequelize',
  // },
};
