const express = require('express');
const router = express.Router();

const Admin = require('../../models/Admin');
//const Admin = require ('../../models/Meeting');

router.get('/', (req, res) => {
    Admin.find()
      .sort({ name: 1 })
      .then(Admins => res.json(Admins));
  });

  router.post('/', (req, res) => {
    const newAdmin = new Admin({
      
      Email:req.body.Email,
      Password:req.body.Password
    
    });
  
    newAdmin.save().then(Admin => res.json(Admin));
  });
  router.delete('/:id', (req, res) => {
    Admin.findById(req.params.id)
      .then(Meeting => Admin.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });

  router.get('/AdminEmail/:id', function(req, res){
    Admin.findById(req.params.id) 
    .then(doc => {
      if(!doc) { return res.status(404).end();}
      return res.status(200).json(doc.Email);
    })
    .catch(err => next(err));
  });
  router.put('/update/:id',function(req,res){
    var id=req.params.id;
    Admin.findOne({_id: id},function(err,foundObject){
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