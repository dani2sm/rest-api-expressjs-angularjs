"use strict";

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        gender: DataTypes.BOOLEAN,
        phone: DataTypes.STRING,
        timezone: DataTypes.STRING,
        language: DataTypes.STRING,
        confirmationCode: DataTypes.STRING,
        isDeleted: DataTypes.BOOLEAN,
        deletedAt: {
            allowNull: true,
            type: DataTypes.DATE
        }
    });

    User.associate = (models) => {
        User.hasMany(models.posts,
            {
                foreignKey: 'user_id'
            }
        );
    };

    User.associate = (models) => {
        User.hasMany(models.comments,
            {
                foreignKey: 'user_id'
            }
        );
    };

    User.associate = (models) => {
        User.belongsToMany(models.roles, {
            through: 'usersRoles',
            as: 'users_has_roles',
            foreignKey: 'user_id'
        });
    };


    return User;
};
