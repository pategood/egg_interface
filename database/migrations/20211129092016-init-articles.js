'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, BOOLEAN } = Sequelize
    await queryInterface.createTable('articles', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      article_id: { type: INTEGER },
      title: { type: STRING(12), allowNull: false },
      user_id: { type: STRING(12), allowNull: false },
      aut_name: { type: STRING(12), allowNull: false, defaultValue: '无' },
      article_desc: STRING(12),
      content: STRING(30),
      comm_count: { type: INTEGER, allowNull: true, defaultValue: 0 },
      create_time: { type: DATE, allowNull: false },
      updated_time: { type: DATE, allowNull: false },
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('articles')
  },
}
