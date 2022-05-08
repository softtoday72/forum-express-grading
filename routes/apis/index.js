const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')
const userController = require('../../controllers/apis/user-controller')
const restcontroller = require('../../controllers/apis/restaurant-controller')
const admin = require('./modules/admin')

router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)
router.use('/admin', admin)
router.get('/restaurants', restcontroller.getRestaurants)

module.exports = router
