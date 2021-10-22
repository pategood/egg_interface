'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getAllUser', controller.user.getAllUser);
  router.get('/logout', controller.user.logout);

  // 获取文章列表
  router.get('/article/articleList', controller.article.getArticleList);

  // 搜索模块
  router.get('/search/result', controller.search.getResult);
  router.get('/search/addHistory', controller.search.addHistory);
  router.get('/search/removeHistory', controller.search.removeHistory);
  router.get('/search/suggestions', controller.search.getSuggestions);
  router.get('/search/histories', controller.search.getHistory);

  router.post('/login', controller.user.login);

  router.get('/register', controller.user.register);


  // router.get('/createTest', controller.user.create);

  // RESTful风格
  // app.router.resources('routerName', 'pathMatch', controller)
  // router.resources('users', '/api/v1/users', controller.v1.users);
};
