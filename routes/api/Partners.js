const express = require('express');
const router = express.Router();

// Partner Model
const Partner = require('../../models/Partner');

// @route   GET api/Partners
// @desc    Get All Partners
// @access  Public
router.get('/', (req, res) => {
  Partner.find()
    .sort({ name: 1 })
    .then(Partners => res.json(Partners));
});

// @route   POST api/Partners
// @desc    Create An Partner
// @access  Public
router.post('/', (req, res) => {
  const newPartner = new Partner({
    business: req.body.business,
    partners: req.body.partners,
    boardmembers: req.body.boardmembers,
    events: req.body.events,
    field: req.body.field,
    projects: req.body.projects,
    feedback: req.body.feedback,
    Lifecoach:req.body.Lifecoach,
    membership:req.body.membership,
    Contracts:req.body.Contracts,
    Email:req.body.Email,
    Password:req.body.Password,
    Notifications:req.body.Notifications
  });

  newPartner.save().then(Partner => res.json(Partner));
});

// @route   DELETE api/Partners/:id
// @desc    Delete A Partner
// @access  Public
router.delete('/:id', (req, res) => {
  Partner.findById(req.params.id)
    .then(Partner => Partner.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

router.put('/update/:id',function(req,res){
  var id=req.params.id;
  Partner.findOne({_id: id},function(err,foundObject){
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
        if(req.body.business){
          foundObject.business=req.body.business;
        }
        if(req.body.partners){
          foundObject.partners=req.body.partners;
        }
        if(req.body.boardmembers){
          foundObject.boardmembers=req.body.boardmembers;
        }
        if(req.body.events){
          foundObject.events=req.body.events;
        }
        if(req.body.field){
          foundObject.field=req.body.field;
        }
        if(req.body.projects){
          foundObject.projects=req.body.projects;
        }
        if(req.body.feedback){
          foundObject.feedback=req.body.feedback;
        }
        if(req.body.Lifecoach){
          foundObject.Lifecoach=req.body.Lifecoach;
        }
        if(req.body.membership){
          foundObject.skills=req.body.membership;
        }
        if(req.body.Contracts){
          foundObject.category=req.body.Contracts;
        }
        if(req.body. Notifications){
          foundObject.state=req.body. Notifications;
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

module.exports = router;