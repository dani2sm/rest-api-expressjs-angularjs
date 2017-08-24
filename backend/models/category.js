const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("categories", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    description:DataTypes.STRING,
    deletedAt: {
      type: DataTypes.DATE
    }

  });

  Category.associate = (models) => {
      Category.hasMany(models.posts,
          {
            foreignKey: 'category_id'
          }
      );
  };
  return Category;

};