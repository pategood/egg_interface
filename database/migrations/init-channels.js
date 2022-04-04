'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, BOOLEAN } = Sequelize;
    await queryInterface.createTable('channels', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      channel_id: { type: INTEGER, allowNull: false, defaultValue: 1 },
      channel_name: { type: STRING, allowNull: false },
      create_time: { type: DATE, allowNull: true },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('channels');
  },
};
