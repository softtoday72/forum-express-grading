const express = require('express')
const router = express.Router()
const adminController = require('../../../controllers/apis/admin-controller')
const { apiErrorHandler } = require('../../../middleware/error-handler')
const upload = require('../../../middleware/multer')

// const categoryController = require('../../../controllers/apis/category-controller')

// 實際路由位置 '/api/admin/restaurants'
router.get('/restaurants', adminController.getRestaurants)
router.delete('/restaurants/:id', adminController.deleteRestaurant)
router.post('/restaurants', upload.single('image'), adminController.postRestaurant)
router.use('/', apiErrorHandler)
module.exports = router
