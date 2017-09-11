'use strict';
module.exports = function(sequelize, DataTypes) {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  });

  Subject.associate = function(models){
     Subject.hasMany(models.Teacher);
     //Subject.hasMany(models.StudentSubjects)
       Subject.belongsToMany(models.Students,{
          through:'StudentSubjects'
       });

      //Subject.belongsToMany(models.Students, {
      //   through: { model: models.StudentSubjects, unique: false }, foreignKey: 'SubjectId' });
  }

  // Subject.associate = function(models){
  //     Subject.hasMany(models.StudentSubjects)
  // }

  return Subject;
};
