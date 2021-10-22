'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  // 获取文章列表
  async getArticleList() {
    const { ctx } = this;
    const { currentPage, pageSize } = ctx.request.body;
    const articleList = await ctx.service.article.article.getArticleList(currentPage, pageSize);
    ctx.body = {
      code: 0,
      data: articleList,
      msg: '',
    };
  }

  // 点赞文章

  // 收藏文章

}

module.exports = ArticleController;
