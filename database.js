var mongoose = require('mongoose');
var mongoose_api = "mongodb+srv://Sanyam_jain:Sj_130401@sanyam1.jpknf.mongodb.net/test"
const connectDB = async()=>{
    try {
    await mongoose.connect(mongoose_api);
    console.log("Connected to MongoDB");    
    } catch (error) {
        console.log(error);
    }
}
module.exports ={
    connectDB
}