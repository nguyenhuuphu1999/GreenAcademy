const {Sequelize,Model,DataTypes} = require('sequelize');
const sequelize = require('./Sequelize')
class Token extends Model{}

Token.init({
    user_id:DataTypes.NUMBER,
    created_date:DataTypes.DATE,
    expireted_date:DataTypes.DATE,
    type_token:DataTypes.NUMBER,
    token:DataTypes.STRING
},{
    sequelize,
    modelName:"token",
    tableName:"token",
    timestamps:false
}
)
module.exports= Token