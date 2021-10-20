'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getAllUser', controller.user.getAllUser);
  router.get('/login', controller.user.login);

  // router.get('/register', controller.user.create);
};
