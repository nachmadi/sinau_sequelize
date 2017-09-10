'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('StudentSubjects', [{
      StudentsId: 1,
      SubjectId: 1,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      StudentsId: 1,
      SubjectId: 1,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      StudentsId: 1,
      SubjectId: 1,
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
