const mysql = require('mysql')
let mysqluri = "127.0.0.1"
const mysqlcon = mysql.createConnection({
    host: mysqluri,
    user: 'root',
    password: '',
    database: 'quiz'
});

exports.getLeaderboard = async(req, res) => {
    console.log("getLeaderboard called")
    mysqlcon.connect()
    let users
    await mysqlcon.query(
        `SELECT * FROM users`,
        (err, results, fields) => {
            console.log(results);
            if(err){
                res.status(400).json({ "Success": false })
            }else{
                users=results
            }
        }
    )
    res.json({ "Success": false , "users" :  users})
}