'use strict';

const { Op } = require('sequelize');
const Service = require('egg').Service;
class ArticelService extends Service {

  async create(article) {
    return this.ctx.model.Article.create(article);
  }

  async findOne(id) {
    const article = await this.ctx.model.Article.findOne({
      where: { article_id: id },
    });
    return article ? article : this.ctx.throw(404, 'article not found');
  }

  async update({ id, updates }) {
    const article = await this.ctx.model.Article.findOne({
      where: { article_id: id },
    });
    if (!article) this.ctx.throw(404, 'article not found');
    return article.update(updates);
  }

  async del(id) {
    const article = await this.ctx.model.Article.findOne({
      where: { article_id: id },
    });
    if (!article) {
      this.ctx.throw(404, 'article not found');
    } else {
      return article.destroy();
    }
  }


  async list({ offset = 0, limit = 10 }) {
    return this.ctx.model.Article.findAndCountAll({
      offset,
      limit,
      order: [
        [ 'create_time', 'desc' ],
        [ 'id', 'desc' ],
      ],
    });
  }

  async searchList() {
    const { pageInfo, reqQuery } = params;
    const offset = pageInfo.pageSize * pageInfo.pageIndex || 0;
    const limit = Number(pageInfo.pageSize || 20);
    return this.ctx.model.Article.findAndCountAll({
      offset: Number(offset),
      limit: Number(limit),
      order: [
        [ 'create_time', 'desc' ],
      ],
    });
  }

  async findArticle(params) {
    const res = await this.ctx.model.Article.findOne({
      where: { title: params.title },
    });
    return res;
  }


}

module.exports = ArticelService;
