const {Sequelize,Model,DataTypes} = require('sequelize');

const sequelize  = require('./Sequelize');

class Product extends Model{}

Product.init({
    product_id:DataTypes.STRING,
    name:DataTypes.STRING,
    type:DataTypes.STRING,
    price:DataTypes.NUMBER,
    image:DataTypes.STRING,
    quantity:DataTypes.NUMBER,
    status:DataTypes.STRING,
    description:DataTypes.STRING,
    alias:DataTypes.STRING

},{
    sequelize,
    modelName:"Product",
    tableName:'product',
    timestamps:false
})

module.exports = Product