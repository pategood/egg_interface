'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/register', controller.user.register);
  router.post('/user/login', controller.user.login);
  router.get('/user/logout', controller.user.logout);
  router.get('/user/getMyInfo', controller.user.getMyInfo);
  router.get('/user/update', controller.user.update)
  
  // 文章模块
  router.get('/articles/articleList', controller.article.getArticleList);
  router.get('/articles/:articleId', controller.article.getArticle);
  router.get('/article/collections', controller.article.collect);
  router.get('/article/undoCollections', controller.article.undoCollect);
  router.get('/article/follow', controller.article.follow);
  router.get('/article/undoFollow', controller.article.undoFollow);
  
  router.get('/', controller.home.index);

  // 搜索模块
  router.get('/search/result', controller.search.getResult);
  router.get('/search/addHistory', controller.search.addHistory);
  router.get('/search/removeHistory', controller.search.removeHistory);
  router.get('/search/suggestions', controller.search.getSuggestions);
  router.get('/search/histories', controller.search.getHistory);


};
