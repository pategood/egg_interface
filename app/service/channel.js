'use strict';

const { Op } = require('sequelize');
const Service = require('egg').Service;
class ChannelService extends Service {
  
//   async create(article) {
//     return this.ctx.model.Article.create(article);
//   }

//   async findOne(id) {
//     const article = await this.ctx.model.Article.findOne({
//       where: { user_id: id },
//     });
//     if (!article) {
//       this.ctx.throw(404, 'article not found');
//     } else {
//       return article;
//     }
//   }

//   async update({ id, updates }) {
//     const article = await this.ctx.model.Article.findOne({
//       where: { article_id: id },
//     });
//     if (!article) this.ctx.throw(404, 'article not found');
//     return article.update(updates);
//   }

//   async del(id) {
//     const article = await this.ctx.model.Article.findOne({
//       where: { article_id: id },
//     });
//     if (!article) {
//       this.ctx.throw(404, 'article not found');
//     } else {
//       return article.destroy();
//     }
//   }

//   async list({ offset = 0, limit = 10 }) {
//     return this.ctx.model.Article.findAndCountAll({
//       offset,
//       limit,
//       order: [
//         [ 'create_time', 'desc' ],
//         [ 'id', 'desc' ],
//       ],
//     });
//   }
// }

module.exports = ChannelService;
