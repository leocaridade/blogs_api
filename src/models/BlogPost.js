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
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: true,
    tableName: 'blog_posts',
    underscored: true
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'users' });
  };

  return BlogPost;
};