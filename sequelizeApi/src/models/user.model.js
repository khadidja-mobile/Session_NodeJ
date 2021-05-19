//const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('users', { // def, nom table ici, les param
        nom :{
            type : Sequelize.STRING
        },
        prenom :{
            type : Sequelize.STRING
        }
    }); 
    return user;
}