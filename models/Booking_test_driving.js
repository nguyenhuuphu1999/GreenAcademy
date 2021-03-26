const { Sequelize,Model,DataTypes} = require('sequelize');
const sequelize = require('./Sequelize');


class BooKing_test_driving extends Model {}

BooKing_test_driving.init({
    id:{
        type:DataTypes.NUMBER,
        primaryKey:true,
        autoIncrement:true
    },
    product_id:DataTypes.STRING,
    customer_name:DataTypes.STRING,
    phone_number:DataTypes.STRING,
    email:DataTypes.STRING,
    booking_time:DataTypes.DATE, 
},{
    sequelize,
    modelName:'Booking_test_driving',
    tableName:'booking_test_driving',
    timestamps:false
})

module.exports = BooKing_test_driving;