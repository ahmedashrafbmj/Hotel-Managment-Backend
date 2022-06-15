
const express = require("express");
const router = express.Router();
var authcon  = require('../controller/authController')



router.post('/create_user',authcon.authCreateUser)

router.get('/get_all_user',authcon.authGetAllUsers)

router.post('/signup',authcon.authSignUp)
router.post('/login',authcon.authLogin)

// // router.route('/sigunup').post()
// // router.route('/sigunup').get()




module.exports = router