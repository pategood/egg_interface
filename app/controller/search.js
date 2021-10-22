'use strict';

const Controller = require('egg').Controller;

class SearchController extends Controller {
  // 获取搜索结果
  async getResult() {
    const { ctx } = this;
    const { searchText = '曾南期', pageSize = 2 } = ctx.request.body;
    const searchResult = await ctx.service.search.search.getSearchResult(searchText, pageSize);
    ctx.body = {
      code: 0,
      data: searchResult,
      msg: '',
    };
  }

  // 获取搜索建议列表
  async getSuggestions() {
    const { ctx } = this;
    const { searchText = '美', pageSize = 2 } = ctx.request.body;
    const res = await ctx.service.search.search.getSuggestions(searchText, pageSize);
    ctx.body = {
      code: 0,
      data: res,
      msg: '',
    };
  }

  // 增加搜索记录
  async addHistory() {
    const { ctx } = this;
    const { searchText = '礼2' } = ctx.request.body;
    const res = await ctx.service.search.search.addHistory(searchText);
    ctx.body = {
      code: 0,
      data: res,
      msg: '',
    };
  }
  // 删除搜索记录
  async removeHistory() {
    const { ctx } = this;
    const { searchText = '礼2' } = ctx.request.body;
    const res = await ctx.service.search.search.removeHistory(searchText);
    ctx.body = {
      code: 0,
      data: res,
      msg: '',
    };
  }

  // 获取搜索历史列表
  async getHistory() {
    const { ctx } = this;
    const { currentPage = 1, pageSize } = ctx.request.body;
    const historyList = await ctx.service.search.search.getHistory(currentPage, pageSize);
    ctx.body = {
      code: 0,
      data: historyList,
      msg: '',
    };
  }
}

module.exports = SearchController;
