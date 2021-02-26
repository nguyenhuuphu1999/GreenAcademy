const {Sequelize,Model,DataTypes} = require('sequelize');

const sequelize  = require('./Sequelize');

class Theme_banner extends Model{}

Theme_banner.init({
    title:DataTypes.NUMBER,
    images:DataTypes.STRING,
   
    status:DataTypes.STRING,
   
},{
    sequelize,
    modelName:"Theme_banner",
    tableName:'theme_banner',
    timestamps:false
})

module.exports = Theme_banner
