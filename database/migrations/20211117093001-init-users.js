'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, BOOLEAN } = Sequelize
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      nick_name: {type:STRING(30),allowNull: false,},
      email: STRING(12),
      username: {type: STRING(10),allowNull: false},
      password: {type:STRING(16),allowNull: false,},
      age: {type:INTEGER,allowNull: true, defaultValue:18,},
      phoneNumber: INTEGER,
      avatar: {
        type: STRING(150),
        allowNull: true,
        comment: '头像',
      },
      status: {
        type: BOOLEAN,
        allowNull: false,
        defaultValue: 1,
        comment: '登录状态: 1 登录 0 退出',
      },
      created_at: DATE,
      updated_at: DATE,
    },{
      freezeTableName: true,
      timestamps: false,
    })
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('users')
  },
}
