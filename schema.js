const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var _student = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    phone:{
        type: Number,
        required: true,
        unique: true,
    },
    username:{
        type: String,
        required: true,
        unique: true,
    },
    age:{
        type: Number,
        default:10
    },
    password:{
        type: String,
        required: true,
    }
},{
    timestamps: true
})

_student.pre('save',function(next){
    var salt= bcrypt.genSaltSync(5)
    var hashedpassword = bcrypt.hashSync(this.password,salt)
    this.password = hashedpassword;
    next()
})


const student   = mongoose.model('Student', _student);

module.exports ={
    student
}