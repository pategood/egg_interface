'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { controller, router, jwt } = app;

  // router.get('/', controller.home.index)
  // router.get('/news', controller.news.list)
  router.post('/user/login', controller.user.login); // 登录并生成Token
  router.resources('users', '/users', controller.user);


  router.resources('article', '/articles', controller.article);

};
