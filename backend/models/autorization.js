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
              field: "role_id",
              allowNull: false
            }
      });
    };
    Autorization.associate = (models) => {
        Autorization.belongsTo(models.operations, {
              onDelete: 'CASCADE',
              foreignKey: {
                field: "operation_id",
                allowNull: false
              }
    });
  };
    Autorization.associate = (models) => {
        Autorization.belongsTo(models.menu_entries, {
            onDelete: 'CASCADE',
            foreignKey: {
              field: "menu_entry_id",
              allowNull: false
            }
      });
    };

    return Autorization;
};

