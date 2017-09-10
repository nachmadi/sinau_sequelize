'use strict';
module.exports = function(sequelize, DataTypes) {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  Subject.associate = function(models){
      Subject.hasMany(models.Teacher)
      Subject.hasMany(models.StudentSubjects)
  }

  // Subject.associate = function(models){
  //     Subject.hasMany(models.StudentSubjects)
  // }

  return Subject;
};
