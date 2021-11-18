'use strict'

module.exports = (app) => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize

  const user = app.model.define('user', {
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
  });
  // user._findList = function({ postName }) {
  //   const Op = app.Sequelize.Op;
  //   return user.findAll({
  //     where: { [Op.and]: [ postName ? { postName: { [Op.like]: `%${postName}%` } } : null ], status: '1' },
  //     order: [[ 'sort', 'DESC' ]],
  //   });
  // };
  // user._findDict = function() {
  //   return user.findAll({ attributes: [ 'postName', [ 'id', 'postId' ]], where: { status: '1' } });
  // };
  user._findOne = params => {
    return user.findOne({ where: params });
  };

  return user
}



