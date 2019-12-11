
const express = require('express'),
    router = express.Router(),
    questions=require('../app/controllers/questionsController')


// @route		GET /questions/addQuestions
// @desc		requests for all the questions available in the database
// @return	    questions list(array of all questions)
router.get("/getQuestion",questions.getQuestions);

// @route		POST /questions/addQuestion
// @desc		inserts a question into a database
// @params      question, option1-4, correct option
// @return	    eventList(array of all events)
router.post("/addQuestion",questions.addQuestion);

module.exports = router;