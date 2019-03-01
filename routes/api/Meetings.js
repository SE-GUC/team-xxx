const express = require('express');
const router = express.Router();

const Meeting = require('../../models/Meeting');
router.get('/', (req, res) => {
    Meeting.find()
      .sort({ name: 1 })
      .then(Meetings => res.json(Meetings));
  });
  
  
  router.post('/', (req, res) => {
    const newMeeting = new Meeting({
        MemberemailOne: req.body.MemberemailOne,
        MemberemailTwo: req.body.MemberemailTwo,
        Location: req.body.Location,
        time: req.body.time,
        Status: req.body.Status
      
    });
  
    newMeeting.save().then(Meeting => res.json(Meeting));
  });
  
  

  router.delete('/:id', (req, res) => {
    Meeting.findById(req.params.id)
      .then(Meeting => Meeting.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });

  router.put('/update/:id',function(req,res){
    var id=req.params.id;
    Meeting.findOne({_id: id},function(err,foundObject){
      if(err){
        console.log(err);
       
      }
      else{
        if(!foundObject){
          res.status(404).send();
    
        }else{
          if(req.body.MemberemailOne){
            foundObject.MemberemailOne=req.body.MemberemailOne;
          }
          if(req.body.MemberemailTwo){
            foundObject.MemberemailTwo=req.body.MemberemailTwo;
          }
          if(req.body.Location){
            foundObject.Location=req.body.Location;
          }
          if(req.body.time){
            foundObject.time=req.body.time;
          }
          if(req.body.Status){
            foundObject.Status=req.body.Status;
          }
          foundObject.save(function(err,updatedObject){
            if(err){
              console.log(err);
              res.status(500).send();
            }
            else{
              res.send(updatedObject);
            }
    
          });
    
        }
      }
    
    });
    });

    

  module.exports = router;