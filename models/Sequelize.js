const Sequelize = require('sequelize');

const sequelize = new Sequelize('freedbtech_GreenAcademy','freedbtech_greenAcademy','Lamgicopass',{
    host:'freedb.tech',
    dialect:'mysql'
});

module.exports = sequelize