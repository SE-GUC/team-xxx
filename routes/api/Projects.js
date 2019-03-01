const express = require('express');
const router = express.Router();

// Project Model
const Project = require('../../models/Project');

// @route   GET api/Partners
// @desc    Get All Partners
// @access  Public
router.get('/', (req, res) => {
  Project.find()
    .sort({ name: 1 })
    .then(Projects => res.json(Projects));
});

// @route   POST api/Projects
// @desc    Create An Project
// @access  Public
router.post('/', (req, res) => {
  const newProject = new Project({
    Title: req.body.Title,
    description: req.body.description,
    candidates: req.body.candidates,
    effort: req.body.effort,
    duration: req.body.duration,
    commitment: req.body.commitment,
    experience: req.body.experience,
    compensation:req.body.compensation,
    partner:req.body.partner,
    skills:req.body.skills,
    consultancy:req.body.consultancy,
    category:req.body.category,
    state:req.body.state,
    applicants:req.body.applicants,
    assigned:req.body.assigned
  });

  newProject.save().then(Project => res.json(Project));
});

// @route   DELETE api/Projects/:id
// @desc    Delete A Project
// @access  Public
router.delete('/:id', (req, res) => {
  Project.findById(req.params.id)
    .then(Project => Project.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

//@ find a specific project by ID
router.get('/:id', function(req, res){
  Project.findById(req.params.id) 
  .then(doc => {
    if(!doc) { return res.status(404).end();}
    return res.status(200).json(doc);
  })
  .catch(err => next(err));
});


//@ find project's description by the prjoect's ID
router.get('/:id/description', function(req, res){
  Project.findById(req.params.id) 
  .then(doc => {
    if(!doc) { return res.status(404).end();}
    return res.status(200).json(doc.description);
  })
  .catch(err => next(err));
});

// toupdate the project attributes
router.put('/update/:id',function(req,res){
  var id=req.params.id;
  Project.findOne({_id: id},function(err,foundObject){
    if(err){
      console.log(err);
      
    }
    else{
      if(!foundObject){
        res.status(404).send();
  
      }else{
        if(req.body.Title){
          foundObject.Title=req.body.Title;
        }
        if(req.body.description){
          foundObject.description=req.body.description;
        }
        if(req.body.candidates){
          foundObject.candidates=req.body.candidates;
        }
        if(req.body.effort){
          foundObject.effort=req.body.effort;
        }
        if(req.body.duration){
          foundObject.duration=req.body.duration;
        }
        if(req.body.commitment){
          foundObject.commitment=req.body.commitment;
        }
        if(req.body.experience){
          foundObject.experience=req.body.experience;
        }
        if(req.body.compensation){
          foundObject.compensation=req.body.compensation;
        }
        if(req.body.partner){
          foundObject.partner=req.body.partner;
        }
        if(req.body.consultancy){
          foundObject.consultancy=req.body.consultancy;
        }
        if(req.body.skills){
          foundObject.skills=req.body.skills;
        }
        if(req.body.category){
          foundObject.category=req.body.category;
        }
        if(req.body.state){
          foundObject.state=req.body.state;
        }
        if(req.body.applicants){
          foundObject.applicants=req.body.applicants;
        }
        if(req.body.assigned){
          foundObject.assigned=req.body.assigned;
        }
        if(req.body.extraInfo){
          foundObject.extraInfo=req.body.extraInfo;
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