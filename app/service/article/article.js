
'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  async getArticleList(currentPage, count = 0) {
    console.log(count);
    const articleList = await this.app.mysql.query('select * from article where id between 10 and 20', '');
    return { articleList };
  }
}

module.exports = ArticleService;
