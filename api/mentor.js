
const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');

const mentorMetadata = require('../models/mentor_metadata');

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next(); 
});

router.get('/test',(req, res) => 
res.json(
    {msg:'API is working.'}
));


router.post('/addMentor',(req,res) =>{

    const mentorObj = req.body.mentor;
    
    console.log(mentorObj,req.body.mentor);
    mentorMetadata.findOneAndUpdate({mentorId : uniqid()}, mentorObj,
    {upsert: true, new: true},
    function(err,doc){
        if(err){
            console.log(err);
            res.status(202).send('Something went wrong')
        }else{
           res.status(200).send(doc);
        }
    })

})


router.get('/getMentor',async(req,res)=>{

    var mentorObj = await mentorMetadata.find();
    

    if(mentorObj.length > 0){
        res.status(200).send(mentorObj);
    }else{
        res.status(202).send('No result found');
    }

    
    
   
})

router.get('/getMentorWithId',(req,res)=>{

    mentorMetadata.findOne({mentorId:req.query.mentorId},function(err,doc){
        if(err){
            res.status(202).send('Something went wrong!')
        }else{
            console.log(doc);
            res.status(200).send(doc);
        }
    });
    
   
})

router.post('/updateMentor',(req,res)=>{
    const mentorObj = req.body.mentor;

    console.log(mentorObj);
    mentorMetadata.findOneAndUpdate({mentorId : mentorObj.mentorId}, mentorObj,
        function(err,doc){
            if(err){
                console.log(err);
                res.status(202).send('Something went wrong')
            }else{
                console.log(doc);
               res.status(200).send('Data updated successfully');
            }
        })


})

router.get('/deleteMentorId',(req,res)=>{
    console.log(req.query.mentorId);
     mentorMetadata.deleteOne({mentorId : req.query.mentorId},function(err,doc){
         if(err){
            res.status(202).send('Something went wrong!');
         }else{
             res.status(200).send('Deleted successfully');
         }
     })
  
})


module.exports = router; 
