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
            through: 'posts_tags',
            as: 'posts_has_tags',
            foreignKey: 'tag_id'
        });
    };


    return Tag;
};

