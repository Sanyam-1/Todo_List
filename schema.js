const mongoose = require('mongoose');

var student = new mongoose.Schema({
    name: {
        type: string,
        required: true,
    },
    email:{
        type: string,
        required: true,
        unique: true,
    },
    phone:{
        type: string,
        required: true,
        unique: true,
    },
    age:{
        type: Number,
    },
    address:[{
        
    }],
    isVerified:Boolean,
})