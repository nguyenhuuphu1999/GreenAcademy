const {Sequelize,Model,DataTypes} = require('sequelize');

const sequelize  = require('./Sequelize');

class Color extends Model{}

Color.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    name:DataTypes.STRING,
    rgb:DataTypes.STRING
},{
    sequelize,
    modelName:"Color",
    tableName:'color',
    timestamps:false
})

module.exports = Color