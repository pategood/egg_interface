'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getAllUser', controller.user.getAllUser);
  router.get('/logout', controller.user.logout);
  // 列表分页查询
  router.get('/getArticleList', controller.article.getArticleList);

  router.post('/login', controller.user.login);

  router.get('/register', controller.user.register);


  // router.get('/createTest', controller.user.create);

  // RESTful风格
  // app.router.resources('routerName', 'pathMatch', controller)
  // router.resources('users', '/api/v1/users', controller.v1.users);
};
