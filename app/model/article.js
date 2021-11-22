'use strict'

module.exports = (app) => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize

  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    aut_name: { type: STRING(30), allowNull: false, defaultValue: '无名氏' },
    title: {},
    created_at: DATE,
    updated_at: DATE,
  })

  return User
}
