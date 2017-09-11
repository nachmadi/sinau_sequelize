'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentSubjects = sequelize.define('StudentSubjects', {
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER,
    skor: DataTypes.INTEGER
  });

  StudentSubjects.associate = function(models){
      StudentSubjects.belongsTo(models.Subject);
      StudentSubjects.belongsTo(models.Students);
  }

  // StudentSubjects.associate = function(models){
  //     StudentSubjects.belongsTo(models.Students)
  // }
  return StudentSubjects;
};
