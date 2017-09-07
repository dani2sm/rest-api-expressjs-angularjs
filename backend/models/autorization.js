const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Autorization = sequelize.define("autorizations", {
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        deletedAt: DataTypes.DATE
    });

    Autorization.associate = (models) => {
        Autorization.belongsTo(models.roles, {
            onDelete: 'CASCADE',
            foreignKey: {
              field: "roleId",
              allowNull: false
            }
      });
    };
    Autorization.associate = (models) => {
        Autorization.belongsTo(models.operations, {
              onDelete: 'CASCADE',
              foreignKey: {
                field: "operationId",
                allowNull: false
              }
    });
  };
    Autorization.associate = (models) => {
        Autorization.belongsTo(models.menu_entries, {
            onDelete: 'CASCADE',
            foreignKey: {
              field: "menuEntryId",
              allowNull: false
            }
      });
    };

    return Autorization;
};

