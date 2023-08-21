const mongoose = require('mongoose');
const mongodbUrl ="mongodb://127.0.0.1:27017";

const mongoDbConnect=  ()=>{
     (mongoose.connect(mongodbUrl)).then(
        ()=>{
            console.log('MongoDb connected');
        }).catch((err)=>{
            console.log(err);
        })
    // console.log('MOngodb Connected');
}

module.exports=mongoDbConnect