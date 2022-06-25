const { response } = require('express');
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
app.use(express.json())

var signup = (req, res, next) => {
    var user =  req.body;
    var data = JSON.parse(fs.readFileSync(path.join(__dirname,'/users.json')));
    data =[
        ...data,
        user
    ]
    fs.writeFileSync(path.join(__dirname,'/users.json'), JSON.stringify(data));
    next();
}

var authorization = (req, res, next) => {
    var { email, password } = req.query;
    var data = JSON.parse(fs.readFileSync(path.join(__dirname,'/users.json')));
   data.map(response => {
    console.log(response.email, response.password,email,password);
    if(email == response.email){
        if(password == response.password){
            next();
        }
    }
   })
   res.send('Unauthorized User');
}

module.exports = {
    authorization,
    signup
}