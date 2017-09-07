const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        deletedAt: DataTypes.DATE
    });

    Post.associate = (models) => {
      Post.belongsTo(models.users, {
        onDelete: 'CASCADE',
        foreignKey: {
          field: "userId",
          allowNull: false
        }
      });
    };
  Post.associate = (models) => {
    Post.belongsTo(models.categories, {
      onDelete: 'CASCADE',
      foreignKey: {
        field: "categoryId",
        allowNull: false
      }
    });
  };
  Post.associate = (models) => {
      Post.belongsTo(models.medias, {
        onDelete: 'CASCADE',
        foreignKey: {
          field: "mediaId",
          allowNull: false
        }
      });
    };
    Post.associate = (models) => {
        Post.belongsToMany(models.tags, {
            through: 'postsTags',
            as:'posts_has_tags',
            foreignKey:'postId'
        });
    };

    Post.associate = (models) => {
        Post.hasMany(models.comments,
            {
                foreignKey: 'postId'
            }
        );
    };

    return Post;
};

