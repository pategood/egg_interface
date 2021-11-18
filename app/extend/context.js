'use strict';
module.exports = {
  result({ success, ...params }) {
    if (success) {
      this.body = { success, code: 200, ...params };
    } else {
      this.body = { success, code: 400, ...params };
    }
  },
};
