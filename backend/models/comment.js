const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("comments", {
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    deletedAt: DataTypes.DATE
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.posts, {
      onDelete: 'CASCADE',
      foreignKey: {
        field: "postId",
        allowNull: false
      }
    });
  };


  return Comment;
};

