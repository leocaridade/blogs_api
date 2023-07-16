module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {type: DataTypes.INTEGER, foreignKey: true},
    published: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    updated: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
  }, {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };

  return BlogPost;
};