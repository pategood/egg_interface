'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  // 获取文章列表
  async getArticleList() {
    const { ctx } = this
    const { currentPage, pageSize } = ctx.request.body
    const articleList = await ctx.service.article.article.getArticleList(currentPage, pageSize)
    ctx.body = {
      code: 0,
      data: articleList,
      msg: '',
    }
  }

  // 获取文章详情
  async getArticle() {
    const { ctx } = this
    const articleId = ctx.params.articleId
    const articleDetails = await ctx.service.article.article.getArticle(articleId)
    ctx.body = {
      code: 0,
      data: articleDetails,
      msg: '',
    }
  }

  // async getCategoryByIds(ids) {
  //   const result = await Promise.all(ids.map((id) => this.getCategoryById(id)))
  //   return result.map((item) => item[0])
  // }

  // 点赞文章

  // 收藏文章
  async collect() {
    const { ctx } = this
    const articleId = ctx.params.articleId
    const res = await ctx.service.article.article.collect(articleId)
    ctx.body = {
      code: 0,
      data: res,
      msg: '',
    }
  }

  // 取消收藏
  async undoCollect() {
    const { ctx } = this
    console.log(ctx)
    // const articleId = ctx.params.articleId;

    // ctx.body = {
    //   code: 0,
    //   data: articleDetails,
    //   msg: '',
    // };
  }
}

module.exports = ArticleController;
