const { BlogPostService, CategoryService, PostCategoryService } = require('../services');

const createBlogPost = async (req, res) => {
  const userId = req.user.dataValues.id;
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  } 

  const allCategories = await CategoryService.getAll();
  const allCategoriesIds = allCategories.map((cat) => cat.dataValues.id);
  
  const allCategoriesExist = categoryIds.every((catId) => allCategoriesIds.includes(catId));

  if (!allCategoriesExist) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  } 

  const newPost = await BlogPostService.createBlogPost({ title, content, userId });
  
  const postId = newPost.dataValues.id;
  const newPostCategory = categoryIds.map((categoryId) => ({ postId, categoryId }));
  
  await PostCategoryService.createMultiplePostCategories(newPostCategory);
  req.postId = newPost.id;
  return res.status(201).json(newPost);
};

const getAllBlogPosts = async (_req, res) => {
  try {
    const blogPosts = await BlogPostService.getAllBlogPosts();
    return res.status(200).json(blogPosts);
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
};