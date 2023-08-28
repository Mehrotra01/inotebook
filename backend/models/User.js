const mongoose = require('mongoose');
const {Schema} = mongoose;
const UserSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    gender:{
        type:String,
        default:"Others"
    },
    Date:{ 
        type:Date,
        default:Date.now
    },

})
const user = mongoose.model('user',UserSchema);
// user.createIndexes();
module.exports= user;