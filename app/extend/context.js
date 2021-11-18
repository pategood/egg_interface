'use strict'
module.exports = {
  result({ code, data='',msg, ...params }) {
    this.body = {  code, data, msg, ...params }
  },
};
