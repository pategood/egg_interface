'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, BOOLEAN } = Sequelize;
    await queryInterface.createTable('videos', {
      video_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: STRING, allowNull: false },
      video_desc: STRING(20),
      direction: { type: STRING, allowNull: false },
      url: { type: STRING, allowNull: false, defaultValue: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
      user_id: { type: INTEGER, allowNull: false, defaultValue: 1 },
      aut_name: { type: STRING(12), allowNull: false, defaultValue: '无' },
      comm_count: { type: INTEGER, allowNull: false, defaultValue: 0 },
      follow_count: { type: INTEGER, allowNull: false, defaultValue: 0 },
      create_time: { type: DATE, allowNull: true },
      updated_time: { type: DATE, allowNull: true },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('videos');
  },
};
