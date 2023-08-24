const express = require('express');
const route = express.Router();

route.get('/',(req,res)=>{
    res.send('Notes will be here')
})
module.exports=route