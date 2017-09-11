
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: { type: DataTypes.STRING,
             allowNull: false,
             unique: true,
             validate: {
                        len: {
                            args: [6, 128],
                            msg: "Email address must be between 6 and 128 characters in length"
                        },
                        isEmail: {
                            msg: "Email address must be valid"
                        }
                    }
            }
  });

  // untuk bisa mengakses properti suatu object(Class) dengan keyword this
  // maka di depan dikasih keyword prototype
  Students.prototype.getFullName = function(){
      return this.first_name+' '+this.last_name;
  }

  Students.associate = function(models){
      //Students.hasMany(models.StudentSubjects)
        Students.belongsToMany(models.Subject, {
            through:'StudentSubjects'
         })

     //Students.belongsToMany(models.Subject,
    //   { through: { model: models.StudentSubjects, unique: false }, foreignKey: 'StudentId'});

  }



  return Students;
};
