
'use strict';

const { Op } = require('sequelize');
const Service = require('egg').Service;
class UserService extends Service {

  async isExist(username) {
    const user = await this.ctx.model.User.findOne({
      where: {
        username,
      },
    });
    if (user) {
      return true;
    }
    return false;

  }


  async login(username, password) {
    const user = await this.ctx.model.User.findAll({
      where: {
        [Op.and]: [{ username }, { password }],
      },
    });
    return user;
  }

  async list({ offset = 0, limit = 10 }) {
    return this.ctx.model.User.findAndCountAll({
      offset,
      limit,
      order: [
        [ 'created_at', 'desc' ],
        [ 'user_id', 'desc' ],
      ],
    });
  }

  async find(id) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user;
  }

  async create(user) {
    return this.ctx.model.User.create(user);
  }

  async update({ id, updates }) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user.update(updates);
  }

  async del(id) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    } else {
      return user.destroy();
    }
  }
}

module.exports = UserService;
