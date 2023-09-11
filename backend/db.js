const mongoose = require('mongoose');
const mongodbUrl ="mongodb://127.0.0.1:27017/inotebook";

const mongoDbConnect=  ()=>{
     (mongoose.connect(mongodbUrl)).then(
        ()=>{
            // console.log('MongoDb connected');
        }).catch((err)=>{
            console.log("error in db"+err);
        })
    // console.log('MOngodb Connected');
}

module.exports=mongoDbConnect