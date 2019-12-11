const express = require('express'),
    router = express.Router(),
    auth=require('../app/controllers/authController')

// @route		POST /auth/login
// @desc		Makes a login request
// @params      username,password
// @return	    returns true/false wether credentials are correct or not
router.post("/login",auth.login);

// @route		POST /auth/register
// @desc		Makes a login request
// @return	    questions list(array of all questions)
router.post("/register",auth.register);

module.exports = router;