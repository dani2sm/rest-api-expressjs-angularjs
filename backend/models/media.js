const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  let Media = sequelize.define("medias", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    filename: DataTypes.STRING,
    size:DataTypes.INTEGER,
    deletedAt: {
      type: DataTypes.DATE
    }

  });

  Media.associate = (models) => {
    Media.hasMany(models.posts,
        {
            foreignKey: 'mediaId'
        }
    );
  };
  return Media;

};