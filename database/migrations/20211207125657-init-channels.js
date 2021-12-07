'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, BOOLEAN } = Sequelize;
    await queryInterface.createTable('channels', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      user_id: { type: INTEGER, allowNull: true, defaultValue: 1 },
      name: STRING(12),
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('channels');
  },
};
