'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, BOOLEAN } = Sequelize;
    await queryInterface.createTable('articles', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      user_id: { type: INTEGER, allowNull: true, defaultValue: 1 },
      article_id: { type: INTEGER, allowNull: true, defaultValue: 1 },
      channel_id: { type: INTEGER, allowNull: false, defaultValue: 1 },
      title: { type: STRING(12), allowNull: false },
      aut_name: { type: STRING(12), allowNull: false, defaultValue: '无' },
      article_desc: STRING(12),
      content: STRING(30),
      comm_count: { type: INTEGER, allowNull: true, defaultValue: 0 },
      create_time: { type: DATE, allowNull: true },
      updated_time: { type: DATE, allowNull: true },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('articles');
  },
};
