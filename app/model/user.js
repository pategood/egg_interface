'use strict'

module.exports = (app) => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize

  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    nick_name: { type: STRING(30), allowNull: false, defaultValue: '无' },
    username: { type: STRING(10), allowNull: false },
    password: { type: STRING(16), allowNull: false },
    email: STRING(12),
    phoneNumber: INTEGER,
    age: INTEGER,
    avatar: {
      type: STRING(150),
      allowNull: true,
      comment: '头像',
    },
    status: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: '登录状态: 1 登录 0 退出',
    },
    created_at: DATE,
    updated_at: DATE,
  })

  return User
}
