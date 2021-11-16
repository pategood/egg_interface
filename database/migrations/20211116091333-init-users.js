// 'use strict'

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     const { INTEGER, DATE, STRING } = Sequelize
//     await queryInterface.createTable('users', {
//       id: { type: INTEGER, primaryKey: true, autoIncrement: true },
//       nick_name: STRING(30),
//       email: STRING(12),
//       username: STRING(10),
//       password: STRING(16),
//       age: INTEGER,
//       phoneNumber: INTEGER,
//       created_at: DATE,
//       updated_at: DATE,
//     })
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('users')
//   },
// }



'use strict'

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      age: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    })
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async (queryInterface) => {
    await queryInterface.dropTable('users')
  },
}