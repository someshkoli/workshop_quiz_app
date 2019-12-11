const mysql = require('mysql')
let mysqluri = "127.0.0.1"
const mysqlcon = mysql.createConnection({
    host: mysqluri,
    user: 'root',
    password: '',
    database: 'quiz'
});
exports.getQuestions = async(req, res) => {
    console.log("getQuestions called")
    mysqlcon.connect()
    let questions
    await mysqlcon.query(
        'SELECT * FROM `questions`',
        (err, results, fields) => {
            console.log(results);
            if(err){
                res.status(400).json({ "Success": false })
            }else{
                questions=results
            }
        }
    )
    res.json({ "Success": true ,"questoins" : questions})
}

exports.addQuestion = async(req, res) => {
    console.log("addQuestion called")
    await mysqlcon.query(
        `INSERT INTO questions(email,password) VALUES(${email},${password})`,
        (err, results, fields) => {
            console.log(results);
            if(err){
                res.status(400).json({ "Success": false })
            }
        }
    )
    res.json({ "Success": true })
}