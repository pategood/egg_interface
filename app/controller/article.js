'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  // 获取文章列表
  async getArticleList() {
    const { ctx, service } = this;
    const { currentPage, pageSize,id=5 } = ctx.query
    try {
      const articleList = await service.article.article.getArticleList(currentPage, pageSize,id)
      const totalCount = await service.article.article.getAllCount(id)
      ctx.sendSuccess({articleList,totalCount})
    } catch (err){
      ctx.sendError(err)
    }
  }

  // 获取文章详情
  async getArticle() {
    const { ctx, service } = this;
    const articleId = ctx.params.articleId
    try {
      const articleDetails = await service.article.article.getArticle(articleId)
      ctx.sendSuccess(articleDetails)
    }catch(err){
      ctx.sendError(err)
    }
  }

  // async getCategoryByIds(ids) {
  //   const result = await Promise.all(ids.map((id) => this.getCategoryById(id)))
  //   return result.map((item) => item[0])
  // }

  // 点赞文章
  // followAccountId
  async follow() {
    const { ctx, service } = this
    const { followAccountId, accountID } = ctx.query
    try {
    const result = await service.article.article.follow({ followAccountId, accountID })
    ctx.sendSuccess(result)
    }catch(err){
      ctx.sendError(err)
    }
  }


  // 取消点赞
  async undoFollow() {
    const { ctx, service } = this
    const { articleId, accountID } = ctx.query
    try {
      const result = await service.article.article.undoFollow({ followAccountId, accountID })
      ctx.sendSuccess(result)
    } catch (err) {
      ctx.sendError(err)
    }
  }

  // 收藏文章
  async collect() {
    const { ctx, service } = this
    const { articleId, accountID } = ctx.query
    try {
    const result = await service.article.article.collect({ article_id:articleId, accountID })
    ctx.sendSuccess(result)
    }catch(err){
      ctx.sendError(err)
    }
  }

  // 取消收藏
  async undoCollect() {
    const { ctx, service } = this
    const { articleId, accountID } = ctx.query
    try {
      const result = await service.article.article.undoCollect({ article_id: articleId, accountID })
      ctx.sendSuccess(result)
    } catch (err) {
      ctx.sendError(err)
    }
  }
}

module.exports = ArticleController;
