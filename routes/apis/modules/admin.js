const express = require('express')
const router = express.Router()
const adminController = require('../../../controllers/apis/admin-controller')
const { apiErrorHandler } = require('../../../middleware/error-handler')
// const categoryController = require('../../../controllers/apis/category-controller')
// const upload = require('../../../middleware/multer')

// 實紀路由位置 '/api/admin/restaurants'
router.get('/restaurants', adminController.getRestaurants)
router.delete('/restaurants/:id', adminController.deleteRestaurant)
router.use('/', apiErrorHandler)
module.exports = router
