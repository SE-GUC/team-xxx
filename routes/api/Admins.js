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
  
 


  
  module.exports = router;