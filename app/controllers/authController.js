const dbcon = require('../../server.js');

exports.login = async (req, res) => {
    console.log("login called")
    res.json({"text":"text"})
}

exports.register = async(req, res) => {
    console.log("register called")
    res.json({"text":"text"})
}