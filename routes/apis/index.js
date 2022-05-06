const express = require('express')
const router = express.Router()
// 取得api 還要輸入帳密非常奇怪, 刪除使用者驗證
// const { authenticated } = require('../../middleware/auth')
const restcontroller = require('../../controllers/apis/restaurant-controller')
const admin = require('./modules/admin')

router.use('/admin', admin)
router.get('/restaurants', restcontroller.getRestaurants)
module.exports = router
