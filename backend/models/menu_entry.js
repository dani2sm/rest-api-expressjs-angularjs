const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const MenyEntry = sequelize.define("menu_entry", {
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

    MenyEntry.associate = (models) => {
        MenyEntry.hasMany(models.autorizations,
            {
                foreignKey: 'menu_entry_id'
            }
        );
    };


  return MenyEntry;
};

