
'use strict';

const Service = require('egg').Service;

class SearchService extends Service {
  // 获取搜索
  async getSearchResult(searchText, pageSize) {
    const searchResult = await this.app.mysql.select('article', {
      limit: pageSize,
      columns: [ 'article_content' ],
      where: {
        article_title: searchText,
      },
    });
    return searchResult;
  }

  // 获取搜索建议
  async getSuggestions(searchText, pageSize) {
    const searchResult = await this.app.mysql.query(
      `SELECT article_title FROM article where article_title like '%${searchText}%' order by article_id desc limit ${pageSize}`,
      ''
    );
    return searchResult;
  }

  // 增加搜索记录
  async addHistory(searchText) {
    const res = await this.app.mysql.insert('search_list', { content: searchText });
    return res;
  }
  // 删除搜索记录
  async removeHistory(searchText) {
    const res = await this.app.mysql.delete('search_list', { content: searchText });
    return res;
  }

  // 获取用户搜索历史
  async getHistory(currentPage = 1, pageSize = 2) {
    const searchHistory = await this.app.mysql.query(
      `select * from search_list where id > '${(currentPage - 1) * pageSize}' limit ${pageSize};`,
      ''
    );
    return searchHistory;
  }

}

module.exports = SearchService;

