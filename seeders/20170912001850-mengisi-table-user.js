'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      id_user: "student1",
      password: "123",
      level_user:"student",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      id_user: "teacher1",
      password: "123",
      level_user:"teacher",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      id_user: "admin1",
      password: "123",
      level_user:"admin",
      createdAt:new Date(),
      updatedAt:new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
