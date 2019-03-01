const express = require('express');
const router = express.Router();

// Member Model
const Member = require('../../models/Member');

// @route   GET api/Members
// @desc    Get All Members
// @access  Public
router.get('/', (req, res) => {
  Member.find()
    .sort({ name: 1 })
    .then(Members => res.json(Members));
});

// @route   POST api/Members
// @desc    Create An Member
// @access  Public
router.post('/', (req, res) => {
  const newMember = new Member({
    name: req.body.name,
    age: req.body.age,
    skills: req.body.skills,
    interests: req.body.interests,
    events: req.body.events,
    tasks: req.body.tasks,
    reviews: req.body.reviews,
    masterclasses: req.body.masterclasses,
    Lifecoach:req.body.Lifecoach,
    membership:req.body.membership,
    Contracts:req.body.Contracts,
    Email:req.body.Email,
    Password:req.body.Password,
    Notifications:req.body.Notifications
  });

  newMember.save().then(Member => res.json(Member));
});

router.put('/update/:id',function(req,res){
  var id=req.params.id;
  Member.findOne({_id: id},function(err,foundObject){
    if(err){
      console.log(err);
      
    }
    else{
      if(!foundObject){
        res.status(404).send();
  
      }else{
        if(req.body.Email){
          foundObject.Email=req.body.Email;
        }
        if(req.body.Password){
          foundObject.Password=req.body.Password;
        }
        if(req.body.name){
          foundObject.name=req.body.name;
        }if(req.body.age){
          foundObject.age=req.body.age;
        }if(req.body.skills){
          foundObject.skills=req.body.skills;
        }if(req.body.interests){
          foundObject.interests=req.body.interests;
        }if(req.body.events){
          foundObject.events=req.body.events;
        }if(req.body.tasks){
          foundObject.tasks=req.body.tasks;
        }if(req.body.reviews){
          foundObject.reviews=req.body.reviews;
        }if(req.body.masterclasses){
          foundObject.masterclasses=req.body.masterclasses;
        }if(req.body.Lifecoach){
          foundObject.Lifecoach=req.body.Lifecoach;
        }if(req.body.membership){
          foundObject.membership=req.body.membership;
        }if(req.body.Contracts){
          foundObject.Contracts=req.body.Contracts;
        }if(req.body.Notifications){
          foundObject.Notifications=req.body.Notifications;
        }
        foundObject.save(function(err,updatedObject){
          if(err){
            console.log(err);
            
          }
          else{
            res.send(updatedObject);
          }
  
        });
  
      }
    }
  
  });
  });

// @route   DELETE api/Members/:id
// @desc    Delete A Member
// @access  Public
router.delete('/:id', (req, res) => {
  Member.findById(req.params.id)
    .then(Member => Member.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;