const {Sequelize,Model,DataTypes} = require('sequelize');

const sequelize  = require('./Sequelize');

class News extends Model{}

News.init({
    id:{
        type:DataTypes.NUMBER,
        primaryKey:true
    },
    title:DataTypes.STRING,
    description:DataTypes.STRING,
    content:DataTypes.STRING,
    image:DataTypes.STRING,
    date:DataTypes.DATE,
   

},{
    sequelize,
    modelName:"News",
    tableName:'news',
    timestamps:false
})

module.exports = News