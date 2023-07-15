const { BlogPost } = require('../models');

const createBlogPost = (post) => BlogPost.create(post);

module.exports = {
  createBlogPost,
};