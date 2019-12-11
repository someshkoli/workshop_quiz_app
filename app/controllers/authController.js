const mysql = require('mysql')
let mysqluri = "127.0.0.1"
const mysqlcon = mysql.createConnection({
    host: mysqluri,
    user: 'root',
    password: '',
    database: 'quiz'
});
exports.login = async (req, res) => {
    console.log("login called")
    mysqlcon.connect()
    let email=`"${req.body.email}"`
    await mysqlcon.query(
        `SELECT password FROM users WHERE email=${email};`,
        (err, results, fields) => {
            console.log(results);
            if(err){
                res.status(400).json({ "Success": false })
            }
            if(results[0].password==req.body.password){
                res.json({ "Success": true })
            }
        }
    )
    res.json({ "text": "text" })
}

exports.register = async (req, res) => {
    mysqlcon.connect()
    let email=`"${req.body.email}"`
    let password = `"${req.body.password}"`
    console.log("register called")
    await mysqlcon.query(
        `INSERT INTO users(email,password) VALUES(${email},${password})`,
        (err, results, fields) => {
            console.log(results);
            if(err){
                res.status(400).json({ "Success": false })
            }
        }
    )
    res.json({ "Success": true })
}