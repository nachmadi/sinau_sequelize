'use strict';
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
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
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }

  });


  Students.associate = function(models){
      Students.hasMany(models.StudentSubjects)
  }

  return Students;
};
