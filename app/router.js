'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { controller, router, jwt } = app;

  router.post('/user/login', controller.user.login); // 登录并生成Token
  router.post('/user/register', controller.user.register);

  router.resources('users', '/users', controller.user);

  router.resources('article', '/articles', controller.article);

  router.post('/article/queryList', controller.article.search);
  router.post('/article/collect', controller.article.collectArticle);
  // 评论文章
  // router.post('article/collect', controller.discuss);


  router.post('/video/queryList', controller.video.index);
  router.post('/video/detail/:id', controller.video.show);


};
