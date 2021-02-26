const {Sequelize,Model,DataTypes} = require('sequelize')

const sequelize  = require('./Sequelize');

class Category extends Model{}

Category.init({
    product_id:DataTypes.STRING,
    name:DataTypes.STRING
},{
    sequelize,
    modelName:"Category",
    tableName:'category',

    timestamps:false
})


module.exports = Category