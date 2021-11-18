'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  // redis: {
  //   enable: true,
  //   package: 'egg-redis',
  // },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
};
