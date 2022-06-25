var express = require('express');
var app = express();
var router = require('./router');
var {connectDB} = require('./database')
connectDB();
var port = 8000;
app.use(express.json())
app.use('/todos',router)

app.listen(port,(err)=>{
    console.log('Server running on port', port);
    if(err) console.log(err);
})