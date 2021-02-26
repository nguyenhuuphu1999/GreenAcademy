const {Sequelize,Model,DataTypes} = require('sequelize');

const sequelize  = require('./Sequelize');

class Detail_each_product extends Model{}

Detail_each_product.init({
    detail_id:DataTypes.NUMBER,
    product_id:DataTypes.NUMBER,
    description:DataTypes.STRING,
    chassis_number:DataTypes.STRING,
    engine_number:DataTypes.STRING,
    color_id:DataTypes.NUMBER,
    guarantee:DataTypes.STRING

},{
    sequelize,
    modelName:"Detail_each_product",
    tableName:'detail_each_product',
    timestamps:false
})

module.exports = Detail_each_product