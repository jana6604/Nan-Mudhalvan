const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createBlog, getBlogs, updateBlog, deleteBlog } = require('../controllers/blogController');

router.get('/', getBlogs);
router.post('/', auth, createBlog);
router.put('/:id', auth, updateBlog);
router.delete('/:id', auth, deleteBlog);

module.exports = router;
