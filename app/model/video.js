'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;

  const Video = app.model.define('video', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: STRING, allowNull: false },
    video_id: { type: INTEGER, allowNull: false, defaultValue: 1 },
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

  return Video;
};
