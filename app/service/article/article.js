
'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  // 文章列表 分页查询
  async getArticleList(currentPage = 1, pageSize = 1) {
    console.log(currentPage, pageSize);
    // const articleList = await this.app.mysql.select('article', { limit: pageSize, orders: [[ 'article_id', 'article_desc' ]] });
    // const articleList = await this.app.mysql.query('select * from article where article_id=?', [ 3 ]);
    // const articleList = await this.app.mysql.query('select * from article where article_id between 0 and 10', '');
    // const articleList = await this.app.mysql.query('select top (pageSize) * from article order by id desc', '');
    //
    const articleList = await this.app.mysql.query(`select * from article where article_id > '${(currentPage - 1) * pageSize}' limit ${pageSize};`, '');
    return { articleList };
  }
}

module.exports = ArticleService;
