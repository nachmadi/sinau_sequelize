'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Subjects', [{
        subject_name: 'kimia',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        subject_name: 'ekonomi',
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
