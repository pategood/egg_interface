'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;

  const Article = app.model.define('articles', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: INTEGER, allowNull: true, defaultValue: 1 },
    article_id: { type: INTEGER, allowNull: true, defaultValue: 1 },
    channel_id: { type: INTEGER, allowNull: false, defaultValue: 1 },
    title: { type: STRING(12), allowNull: false },
    aut_name: { type: STRING(12), allowNull: false, defaultValue: '无' },
    article_desc: STRING(12),
    content: STRING(30),
    collect_count: { type: INTEGER, allowNull: false, defaultValue: 0 },
    comm_count: { type: INTEGER, allowNull: true, defaultValue: 0 },
    create_time: { type: DATE, allowNull: true },
    updated_time: { type: DATE, allowNull: true },
  });

  return Article;
};
