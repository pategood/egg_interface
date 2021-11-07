'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/register', controller.user.register);
  router.get('/logout', controller.user.logout);
  router.get('/user/update', controller.user.update)



  router.get('/', controller.home.index);
  router.post('/login', controller.user.login);

  // 获取文章列表
  router.get('/articles/articleList', controller.article.getArticleList);
  router.get('/articles/:articleId', controller.article.getArticle);
  router.get('/article/collections', controller.article.collect);
  router.get('/article/collections/:articleId', controller.article.undoCollect);

  // 搜索模块
  router.get('/search/result', controller.search.getResult);
  router.get('/search/addHistory', controller.search.addHistory);
  router.get('/search/removeHistory', controller.search.removeHistory);
  router.get('/search/suggestions', controller.search.getSuggestions);
  router.get('/search/histories', controller.search.getHistory);


};
