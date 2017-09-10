'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentSubjects = sequelize.define('StudentSubjects', {
    StudentsId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  StudentSubjects.associate = function(models){
      StudentSubjects.belongsTo(models.Subject)
      StudentSubjects.belongsTo(models.Students)
  }

  // StudentSubjects.associate = function(models){
  //     StudentSubjects.belongsTo(models.Students)
  // }
  return StudentSubjects;
};
