const {Sequelize,Model,DataTypes} = require('sequelize');

const sequelize  = require('./Sequelize');

class Customer extends Model{}

Customer.init({
    id:{
        type:DataTypes.NUMBER,
        primaryKey:true
    },
    order_id:DataTypes.STRING,
    name:DataTypes.STRING,
    phone_number:DataTypes.STRING,
    email:DataTypes.STRING,
    payment_method:DataTypes.STRING
    
},{
    sequelize,
    modelName:"Customer",
    tableName:'customer',
    timestamps:false
})

module.exports = Customer