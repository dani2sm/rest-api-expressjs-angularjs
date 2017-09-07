const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Operation = sequelize.define("operations", {
    code : {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
      label : {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1]
          }
      },
    deletedAt: DataTypes.DATE
  });

    Operation.associate = (models) => {
        Operation.hasMany(models.autorizations,
            {
                foreignKey: 'operationId'
            }
        );
    };


  return Operation;
};

