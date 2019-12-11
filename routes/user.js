const express = require('express'),
    router = express.Router(),
    user=require('../app/controllers/userController')

// @route		GET /user/getLeaderboard
// @desc		Makes a login request
// @return	    questions list(array of all questions)
router.get("/getLeaderboard",user.getLeaderboard);

module.exports = router;