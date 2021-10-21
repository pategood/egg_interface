'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  // 获取文章列表
  async getArticleList() {
    const { ctx } = this;
    const { currentPage, count } = ctx.request.body;
    const articleList = await ctx.service.article.getArticleList(currentPage, count);
    ctx.body = articleList;
  }
}

module.exports = ArticleController;
