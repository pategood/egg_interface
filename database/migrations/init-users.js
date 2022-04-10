'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, BOOLEAN } = Sequelize;
    await queryInterface.createTable('users', {
      user_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      nick_name: { type: STRING(30), allowNull: false, defaultValue: '无名氏' },
      username: { type: STRING(10), allowNull: false, unique: true },
      password: { type: STRING(16), allowNull: false },
      email: STRING(30),
      phoneNumber: STRING(20),
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
      followNum: { type: INTEGER, defaultValue: 0 },
      collectNum: { type: INTEGER, defaultValue: 0 },
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
