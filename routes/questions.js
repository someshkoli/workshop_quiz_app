
const express = require('express'),
	router = express.Router(),
    dbcon = require('../server').mysqlcon;
router.post("/getQuestion",{
    dbcon.query(
        'select * from questions',(err,results,feilds) => {
            console.log(results);
            console.log(err)
            console.log(feilds)
        }
    );
})