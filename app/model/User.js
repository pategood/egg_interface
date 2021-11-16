// 'use strict'

// module.exports = (app) => {
//   const { STRING, INTEGER, DATE } = app.Sequelize

//   const User = app.model.define('user', {
//     id: { type: INTEGER, primaryKey: true, autoIncrement: true },
//     nick_name: STRING(30),
//     email: STRING(12),
//     username: STRING(10),
//     password: STRING(16),
//     age: INTEGER,
//     phoneNumber: INTEGER,
//     created_at: DATE,
//     updated_at: DATE,
//   })

//   return User
// }



'use strict'

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    age: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  })

  return User
}