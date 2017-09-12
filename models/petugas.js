'use strict';
var utility = require('../helper/util.js');

module.exports = function(sequelize, DataTypes) {
  var Petugas = sequelize.define('Petugas', {
    user_id: DataTypes.STRING,
    user_pass: DataTypes.STRING,
    rool: DataTypes.STRING,
    salt: DataTypes.STRING
  },{
    //triger
    hooks: {
      beforeCreate: (callBackObjekIni) => {
        //let newPass = utility.planToHash(callBackObjekIni.user_pass+callBackObjekIni.salt);
        let newPass = utility.getMd5(callBackObjekIni.user_pass+callBackObjekIni.salt);
        //console.log(callBackObjekIni.user_pass+" "+callBackObjekIni.salt);
        //console.log(newPass);
        callBackObjekIni.user_pass = newPass;
      },
      beforeUpdate:(callBackObjekIni) => {
        //let newPass = utility.planToHash(callBackObjekIni.user_pass+callBackObjekIni.salt);
        let newPass = utility.getMd5(callBackObjekIni.user_pass+callBackObjekIni.salt);
        //console.log(callBackObjekIni.user_pass+" "+callBackObjekIni.salt);
        //console.log(newPass);
        callBackObjekIni.user_pass = newPass;
      }
    }
  });
  return Petugas;
};
