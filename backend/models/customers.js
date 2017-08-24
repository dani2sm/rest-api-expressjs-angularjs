const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let Customer = sequelize.define("Customer", {
        customer: {
            type: DataTypes.STRING
        },

    });

    Customer.associate = (models) => {
        Customer.hasMany(models.tacos2s);
    }
    return Customer;

};