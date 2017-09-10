module.exports = {
options: {
  tableName: 'owner'
},
attributes: {
  id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(255)
  },
  associations: function () {
     Owner.hasMany(Property, {
     foreignKey: {
       name: 'owner_id'
     }
   });
 }
}

//Property.js
module.exports = {
options: {
  tableName: 'property'
},
attributes: {
  id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(255)
  }




const Player = this.sequelize.define('player', {/* attributes */});
const Team = this.sequelize.define('team', {/* attributes */});
Player.belongsTo(Team);             // Will add a teamId attribute to Player to hold the primary key value for Team

const Task = this.sequelize.define('task', { title: Sequelize.STRING })
const User = this.sequelize.define('user', { username: Sequelize.STRING })
User.hasMany(Task)
Task.belongsTo(User)
