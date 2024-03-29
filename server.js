const express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    authRoutes = require('./routes/auth');
questionRoutes = require('./routes/questions');
userRoutes = require('./routes/user');
mysql = require('mysql')
const app = express();

//=======================
// MIDDLEWARE
//=======================

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

//=======================
// DATABASE CONFIG
//=======================

let mysqluri = "127.0.0.1"
const mysqlcon = mysql.createConnection({
    host: mysqluri,
    user: 'root',
    password: '',
    database: 'quiz'
});
// console.log(mysqlcon)
// mysqlcon.connect()
module.exports=mysqlcon
//=======================
// ALLOW-CORS
//=======================
// For development
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
});

// =======================
// ROUTES
// =======================

app.use("/auth/", authRoutes);
app.use("/questions/", questionRoutes);
app.use("/user/", userRoutes);

// //=======================
// // STARTING THE SERVER
// //=======================

app.get('/', (req, res) => {
    res.send('Works')
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('App listening on port ' + port);
});

//export db module
// module.exports = mysqlcon;