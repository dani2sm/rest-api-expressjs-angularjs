const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define("tags", {
        tag: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        deletedAt: DataTypes.DATE
    });

    Tag.associate = (models) => {
        Tag.belongsToMany(models.posts, {
            through: 'postsTags',
            as: 'posts_has_tags',
            foreignKey: 'tagId'
        });
    };


    return Tag;
};

