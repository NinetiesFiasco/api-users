const express = require('express')
const controller = require('./controller')

const router = express.Router()

router.route('/').get(controller.initial)
router.route('/register').post(controller.create)

module.exports = router