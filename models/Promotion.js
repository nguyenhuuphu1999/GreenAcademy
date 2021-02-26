

const {Sequelize,Model,DataTypes} = require('sequelize');

const sequelize  = require('./Sequelize');

class Promotion extends Model{}

Promotion.init({
    id:{
        type:DataTypes.NUMBER,
        primaryKey:true
    },
    quantity:DataTypes.NUMBER,
    start_date:DataTypes.DATE,
    end_date:DataTypes.DATE,
    sale_off_percentage:DataTypes.NUMBER
    
},{
    sequelize,
    modelName:"Promotion",
    tableName:'promotion',
    timestamps:false
})

module.exports = Promotion  