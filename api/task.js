const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');

const taskMetaData = require('../models/mentor_task');

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next(); 
});


router.get('/test',(req, res) => 
res.json(
    {msg:'API is working.'}
));


router.post('/addTask',(req,res) =>{
   
    const taskObj = req.body.formData;
    
    var resp = [];
    for (var i = 0; i < taskObj.length ; i++){
        var response = {};
        taskMetaData.findOneAndUpdate({taskId : uniqid()}, taskObj[i],
        {upsert: true, new: true},
        function(err,doc){
            if(err){
                console.log(err);
                response.status = 202;
                response.statusMessage = 'Something went wrong';
            }else{
                console.log(doc);
                response.status = 200;
                response.statusMessage = 'Success';
            }
        resp.push(response);  
        })
       
    }
    
    res.send(resp);
})


module.exports = router; 
