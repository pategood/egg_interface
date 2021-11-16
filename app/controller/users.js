// app/controller/users.js
const Controller = require('egg').Controller

function toInt(str) {
  if (typeof str === 'number') return str
  if (!str) return str
  return parseInt(str, 10) || 0
}

class UserController extends Controller {
  async index() {
    const { ctx } = this
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) }
    ctx.body = await ctx.model.User.findAll(query)
  }

  async show() {
    const { ctx } = this
    ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id))
  }

  async create() {
    const { ctx } = this
    const { username, age } = ctx.request.body
    const user = await ctx.model.User.create({ username, age })
    ctx.status = 201
    ctx.body = user
  }

  async update() {
    const { ctx } = this
    const id = toInt(ctx.params.id)
    const user = await ctx.model.User.findByPk(id)
    if (!user) {
      ctx.status = 404
      return
    }

    const { username, age } = ctx.request.body
    await user.update({ username, age })
    ctx.body = user
  }

  async destroy() {
    const { ctx } = this
    const id = toInt(ctx.params.id)
    const user = await ctx.model.User.findByPk(id)
    if (!user) {
      ctx.status = 404
      return
    }

    await user.destroy()
    ctx.status = 200
  }
}

module.exports = UserController

