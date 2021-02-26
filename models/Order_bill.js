const {Sequelize,Model,DataTypes} = require('sequelize');

const sequelize  = require('./Sequelize');

class Order_bill extends Model{}

Order_bill.init({
    id:{
        type:DataTypes.NUMBER,
        primaryKey:true
    },
    detail_id:DataTypes.STRING,
    status:DataTypes.STRING,
    quantity:DataTypes.NUMBER,
    each_product_price:DataTypes.NUMBER,
    sale_off_percentage:DataTypes.NUMBER,
    total_price:DataTypes.NUMBER,
    order_date:DataTypes.DATE

},{
    sequelize,
    modelName:"Order_bill",
    tableName:'order_bill',
    timestamps:false
})

module.exports = Order_bill