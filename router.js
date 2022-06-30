var express = require('express');
var app = express();
var fs = require('fs');
var router = express.Router();
var path = require('path');
var { student, student} = require('./schema')
var {authorization, signup} = require('./authentication.js');


const { v4: uuidv4 } = require('uuid');
var getUid = require('get-uid');
const { send } = require('process');

app.use(express.json())
router.get('/',(req, res) => {
  try {
    var data = JSON.parse(fs.readFileSync(path.join(__dirname,'/todos.json'))) ;
    var {count} = req.query;
    if(!count) res.send(data);
    else if(count > data.length) res.send("count cannot be more than " + data.length);
    else{
        var arr = data.slice(0, count)
        res.send(arr);    
    }
  } catch (error) {
    console.log(error);
  }
})
router.post('/signup',async (req, res) => {
    try {
        var {name,email,phone,age,password,username} = req.body;
        const stud = new student({name, email, phone, age, password,username});
        await stud.save()
        var data ={
            success: true,
            data: {stud},
            message:"Data saved successfully"
        }
        res.status(201).json(data);        
    } catch (error){
        var data = {
            success: false,
            message:error.message
        }
        res.status(400).json(data)
        console.log(error);
    }
})
router.get('/:id',authorization,(req, res) => {
    try{
        var { id } = req.params;
        var data = JSON.parse(fs.readFileSync(path.join(__dirname,'/todos.json'))) ;
        data = data.find((item)=>item.id == id);
        res.send(data);
    }
    catch (error) {
        console.log(error);
    }
})
router.post('/',(req, res)=>{
    try {
        var data = req.body
        var todos = JSON.parse(fs.readFileSync(path.join(__dirname,'/todos.json'))) ;
        data = {
            "userId": uuidv4(),
            "id": getUid(),
            ...data,
        }
        todos = [
            ...todos,
            data
        ]
        fs.writeFileSync(path.join(__dirname,'/todos.json'),JSON.stringify(todos));
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

module.exports = router;
