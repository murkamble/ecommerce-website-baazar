const express = require('express')
const router = express.Router()
const { addCategory, getCategories } = require('../controller/category')
const { requireSignin, adminMiddleware } = require('../common-middleware/index')

router.post('/category/create', requireSignin, adminMiddleware, addCategory)
router.get('/category/getcategories', getCategories)

module.exports = router;