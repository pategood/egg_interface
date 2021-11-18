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
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks'
  // },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
};
